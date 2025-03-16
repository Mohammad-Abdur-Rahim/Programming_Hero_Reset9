import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner';

const Phone = () => {
  const [phone, setPhone] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        setTimeout(() => {
          setPhone(data.data.data);
          setLoading(false);
        }, 1000); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          visible={true}
        />
      ) : (
        <h2 className="text-5xl">Phone : {phone.length}</h2>
      )}
    </div>
  );
};

export default Phone;
