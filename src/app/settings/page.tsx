"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import NavBar from "@/components/NavBar";
import ToggleButton from "@/components/ToggleButton";
import { motion } from "motion/react";

const preferences = [
  'food', 'sports', 'tech', 'movies', 'nature', 'intense', 'gambling', 'social', 'scenic'
]

export default function Settings() {
  const [username, setUsername] = useState("P.Diddy");
  const [profilePic, setProfilePic] = useState("/profile-picture.png");
  const [newUsername, setNewUsername] = useState("");
  const [newProfilePic, setNewProfilePic] = useState<File | null>(null);
  const [newProfilePicName, setNewProfilePicName] = useState("");

  const [selectedPreferences, setSelectedPreferences] = useState<boolean[]>(new Array(preferences.length).fill(false))

  const toggleSelected = (index: number) => {
    setSelectedPreferences((prev) => {
      const newSelectedPreferences = [...prev];
      newSelectedPreferences[index] = !newSelectedPreferences[index]
      return (newSelectedPreferences)
    })
  }

  const router = useRouter();

  // useEffect(() => {
  //   fetch('http://localhost:5000/auth/me', {
  //     method: 'GET'
  //   }).then((response) => {
  //     if (response.ok) {
  //       response.json().then((data) => {

  //         if (data === null) router.push('/')
  //       })
  //     }
  //   }).catch((e) => console.error(e))
  // }, [])

  const handleNextClick = () => {
    router.push("/preferences");
  }

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
    <div className="min-h-screen bg-[#FAE0E7] p-4 sm:p-6 flex flex-col">
      <h1 className="text-4xl font-bold mb-4 text-black">Settings</h1>
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
        <ProfileCard username={username} profileImage={profilePic} />
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-black text-semi-bold">
              Change username by entering new username in field below.
            </label>
            <motion.input className="h-12 bg-white rounded-lg p-2 text-black text-lg" placeholder={'Username'}/>
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
        <div className="flex-grow mt-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Edit Preferences</h2>
          <div className="flex flex-wrap space-x-3 space-y-3">
            {
              preferences.map((p, i) => <ToggleButton key={i} text={p} isSelected={selectedPreferences[i]} onToggle={() => toggleSelected(i)} />)
            }
          </div>
        </div>
        <button
          onClick={handleNextClick}
          className="mt-4 bg-[#FF3F3F] text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition self-end"
        >
          Edit Preferences
        </button>
      </div>
      <NavBar />
    </div>
  );
}