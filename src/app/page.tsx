"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams, useRouter } from "next/navigation";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Training from "@/sections/Training";
import Contact from "@/sections/Contact";

import { ProjectItem, projectsData } from "@/data/projectsData";
import { ExperienceItem, experienceData } from "@/data/experienceData";
import { TrainingItem, trainingData } from "@/data/trainingData";

import ProjectDetailModal from "@/components/modals/ProjectDetailModal";
import ExperienceDetailModal from "@/components/modals/ExperienceDetailModal";
import TrainingDetailModal from "@/components/modals/TrainingDetailModal";
import CVModal from "@/components/modals/CVModal";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

function PortfolioContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [preloaderDone, setPreloaderDone] = useState(false);

  // Modal states
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [selectedTraining, setSelectedTraining] = useState<TrainingItem | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);

  // Check URL query parameters for deep linking
  useEffect(() => {
    const projectParam = searchParams.get("project");
    const expParam = searchParams.get("experience");
    const trainingParam = searchParams.get("training");
    const viewParam = searchParams.get("view");

    if (projectParam) {
      const found = projectsData.find((p) => p.slug === projectParam || p.id === projectParam);
      if (found) setSelectedProject(found);
    }

    if (expParam) {
      const found = experienceData.find((e) => e.slug === expParam || e.id === expParam);
      if (found) setSelectedExperience(found);
    }

    if (trainingParam) {
      const found = trainingData.find((t) => t.slug === trainingParam || t.id === trainingParam);
      if (found) setSelectedTraining(found);
    }

    if (viewParam === "cv") {
      setIsCVOpen(true);
    }
  }, [searchParams]);

  // Clean URL when closing modal without full reload
  const handleCloseProject = () => {
    setSelectedProject(null);
    if (searchParams.get("project")) {
      router.replace("/", { scroll: false });
    }
  };

  const handleCloseExperience = () => {
    setSelectedExperience(null);
    if (searchParams.get("experience")) {
      router.replace("/", { scroll: false });
    }
  };

  const handleCloseTraining = () => {
    setSelectedTraining(null);
    if (searchParams.get("training")) {
      router.replace("/", { scroll: false });
    }
  };

  const handleCloseCV = () => {
    setIsCVOpen(false);
    if (searchParams.get("view") === "cv") {
      router.replace("/", { scroll: false });
    }
  };

  return (
    <>
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}
      <CustomCursor />
      <SmoothScroll>
        <Navbar onOpenCVModal={() => setIsCVOpen(true)} />
        <main>
          <Hero />
          <About />
          <Experience onOpenExperienceModal={(item) => setSelectedExperience(item)} />
          <Projects onOpenProjectModal={(project) => setSelectedProject(project)} />
          <Skills />
          <Education />
          <Training onOpenTrainingModal={(item) => setSelectedTraining(item)} />
          <Contact />
        </main>
      </SmoothScroll>

      {/* Global Interactive Modals */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseProject}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      <ExperienceDetailModal
        experience={selectedExperience}
        isOpen={Boolean(selectedExperience)}
        onClose={handleCloseExperience}
        onSelectExperience={(exp) => setSelectedExperience(exp)}
      />

      <TrainingDetailModal
        item={selectedTraining}
        isOpen={Boolean(selectedTraining)}
        onClose={handleCloseTraining}
        onSelectItem={(item) => setSelectedTraining(item)}
      />

      <CVModal
        isOpen={isCVOpen}
        onClose={handleCloseCV}
      />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <PortfolioContent />
    </Suspense>
  );
}
