import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Senin = React.lazy(() => import("../components/Mapel/Senin"));
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"));
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"));
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"));
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"));

const Schedule = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayIndex = new Date().getDay();
  const currentDay = daysOfWeek[currentDayIndex];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const piketGroup = [
    ["SUSI", "MEKA", "YANDE"], // Monday
    ["OKA", "WIJAYA", "LODANG"], // Tuesday
    ["DWIKA", "NGAKAN NYOMAN", "AGUS"], // Wednesday
    ["ARYA", "PRADANA", "GUNGDE"], // Thursday
    ["DESTA", "DIAH", "ARY SURYA"], // Friday
  ];

  const dayComponents = [
    null, // Sunday
    Senin, // Monday
    Selasa, // Tuesday
    Rabu, // Wednesday
    Kamis, // Thursday
    Jumat, // Friday
    null, // Saturday
  ];

  const TodayComponent = dayComponents[currentDayIndex];
  const currentPiketNames = currentDayIndex > 0 && currentDayIndex < 6 ? piketGroup[currentDayIndex - 1] : [];

  console.log("Current Day:", currentDay);
  console.log("Piket Group:", piketGroup);
  console.log("Current Piket Names:", currentPiketNames);

  return (
    <>
      {/* Jadwal Mapel */}
      <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16 ">
        <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
          <div
            className="text-2xl font-medium mb-5"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {currentDay}
          </div>
          <div data-aos="fade-up" data-aos-duration="400">
            {TodayComponent ? (
              <React.Suspense fallback={<div>Loading...</div>}>
                <TodayComponent />
              </React.Suspense>
            ) : (
              <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
            )}
          </div>
        </div>
      </div>

      {/* Jadwal Piket */}
      <div className="text-white flex flex-col justify-center items-center mt-8 lg:mt-0 lg:mb-[10rem] mb-10 overflow-y-hidden">
        <div
          className="text-2xl font-medium mb-5 text-center"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Piket
        </div>
        {currentPiketNames.length > 0 ? (
          currentPiketNames.map((piketName, index) => (
            <div
              key={index}
              className={`border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${
                index === currentPiketNames.length - 1 ? "border-b-2" : ""
              }`}
              data-aos="fade-up"
              data-aos-duration={600 + index * 100}
            >
              <div className="text-base font-medium">{piketName}</div>
            </div>
          ))
        ) : (
          <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
        )}
      </div>
    </>
  );
};

export default Schedule;
