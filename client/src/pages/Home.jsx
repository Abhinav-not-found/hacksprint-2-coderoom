import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CreateRoomModal from "@/components/CreateRoomModal";
import JoinRoomModal from "@/components/JoinRoomModal";

import { useRoomForms } from "../hooks/useRoomForms";

const Home = () => {
  const {
    createForm,
    joinForm,
    handleCreateChange,
    handleJoinChange,
    handleCreateRoom,
    handleJoinRoom,
  } = useRoomForms();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08111F] text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-[-250px] -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[160px]" />

      <Navbar onGetStarted={() => setIsCreateOpen(true)} />

      <Hero
        onCreateClick={() => setIsCreateOpen(true)}
        onJoinClick={() => setIsJoinOpen(true)}
      />

      <CreateRoomModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        createForm={createForm}
        handleCreateChange={handleCreateChange}
        handleCreateRoom={() => {
          handleCreateRoom();
          setIsCreateOpen(false);
        }}
      />

      <JoinRoomModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
        joinForm={joinForm}
        handleJoinChange={handleJoinChange}
        handleJoinRoom={() => {
          handleJoinRoom();
          setIsJoinOpen(false);
        }}
      />
    </main>
  );
};

export default Home;
