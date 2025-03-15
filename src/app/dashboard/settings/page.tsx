"use client"

import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";

export default function Settings() {
  const [username, setUsername] = useState("P.Diddy");
  const [profilePic, setProfilePic] = useState("/profile-picture.png");
  const [newUsername, setNewUsername] = useState("");
  const [newProfilePic, setNewProfilePic] = useState<File | null>(null);
  const [newProfilePicName, setNewProfilePicName] = useState("");

  const handleNewUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value);
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProfilePic(e.target.files[0]);
      setNewProfilePicName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newUsername) {
      setUsername(newUsername);
      setNewUsername("");
    }

    if (newProfilePic) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(newProfilePic);
      setNewProfilePic(null);
      setNewProfilePicName("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Settings</h1>
      <ProfileCard username={username} profileImage={profilePic} />
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-black text-semi-bold">
            Change username by entering new username in field below.
          </label>
          <input
            type="text"
            id="username"
            value={newUsername}
            onChange={handleNewUsernameChange}
            className="text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:bg-gray-200 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profilePic" className="block text-sm font-medium text-black semi-bold mb-2">
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePic"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="hidden text-black"
          />
          <label
            htmlFor="profilePic"
            className="mt-2 bg-[#FF3F3F] text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition cursor-pointer"
          >
            Upload File Here
          </label>
          {newProfilePicName && (
            <p className="mt-2 text-sm text-gray-600">{newProfilePicName}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-6 bg-[#FF6262] text-white px-4 py-2 rounded-lg shadow hover:bg-[#FF3F3F] transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}