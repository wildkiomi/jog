import React, { useEffect, useState } from "react";
import sad from "assets/sad.svg";
import getJogs from "api/getJogs";
import Jog from "components/Jog";

const Jogs = () => {
  const [jogs, setJogs] = useState(null);

  useEffect(() => {
    getJogs()
      .then(({ response: { jogs: fetchedJogs } }) => {
        setJogs(fetchedJogs);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {jogs ? (
        <>
          {jogs.map(({ date, distance, time, id }) => (
            <Jog key={id} date={date} distance={distance} time={time} />
          ))}
        </>
      ) : (
        <>
          <img src={sad} alt="sad" className="sad" />
          <p className="no_jogs">Nothing is there</p>
          <button className="create_first_jog">
            <span>Create your jog first</span>
          </button>
        </>
      )}
    </>
  );
};

export default Jogs;
