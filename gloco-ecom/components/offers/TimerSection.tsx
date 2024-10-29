"use client";

import { useEffect, useState } from "react";

const TimerSection = ({ offerTime }: { offerTime: Date }) => {
  const [day, setDay] = useState<number | null>(null);
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);
  const [second, setSecond] = useState<number | null>(null);
  const [offerText, setOfferText] = useState(true);

  // const countDownDate = new Date("Aug 2, 2023 17:00:00").getTime();
  const countDownDate = new Date(`${offerTime}`).getTime();

  useEffect(() => {
    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (seconds >= 0) {
        setDay(days);
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
      }

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setOfferText(false);
      }
    }, 1000);
  }, [second]);

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <p className="font-medium text-sm">{offerText ? `OFFER ENDS AT` : `OFFER EXPIRED`}</p>
      {offerText && (
        <ul className=" text-sm flex gap-3 ">
          <li className="bg-muted w-8 h-8 flex justify-center items-center relative after:content-['_:'] after:absolute after:-right-2">{day} </li>
          <li className="bg-muted w-8 h-8 flex justify-center items-center relative after:content-['_:'] after:absolute after:-right-2">{hour}</li>
          <li className="bg-muted w-8 h-8 flex justify-center items-center relative after:content-['_:'] after:absolute after:-right-2">{minute}</li>
          <li className="bg-muted w-8 h-8 flex justify-center items-center relative">{second}</li>
        </ul>
      )}
    </div>
  );
};

export default TimerSection;
