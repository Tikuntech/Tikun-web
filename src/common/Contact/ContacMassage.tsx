import React from "react";
import Image from "next/image";
import MassgImg from "../../../public/Contact/Rectangle (1).png";

const ContacMassage: React.FC = () => {
  return (
    <>
      {/* <div className='flex justify-center mt-8 h-full bg-sky-400'> */}
      {/* Card Container */}
      <div className="relative w-full max-w-xl bg-sky-400 ">
        {/* Image */}
        <Image
          src={MassgImg}
          alt="Location"
          width={600}
          height={400}
          className="object-cover rounded-lg"
        />
        {/* Form Overlay */}
        <div className="absolute inset-0 p-10 flex flex-col items-center justify-center">
          {/* <form className="flex flex-col space-y-4 bg-custom-black  rounded-lg w-2/3">
           
            <div className="flex gap-6">
              <div className="flex flex-col pl-10">
                <p className="font-semibold text-black">Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 p-2 rounded-md border border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-black">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 p-2 rounded-md border border-gray-300"
                />
              </div>
            </div>
           
            <p className=" text-black">Message</p>
            <textarea
              placeholder="Message"
              rows={4}
              className="p-2 rounded-md border border-gray-300"
            ></textarea>
            <div className="flex items-center space-x-">
              <input
                type="checkbox"
                id="consent"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <p className="text-sm">
                By ticking this box, I am consenting to be sent monthly articles
                and promotions through tickuntech newsletter.
              </p>
              <button
                type="submit"
                className=" text-white p-2 rounded-md bg-black "
              >
                Send
              </button>
            </div>
          </form> */}

          <form>
            {/* <h1 className="text-3xl font-semibold mb-6">Contact Us</h1> */}

            <div className="text-left ">
              <h1 className="text-3xl font-bold mb-2  text-black ">
                Send Us Message
              </h1>
              <p className="text-sm text-white">
                Have any questions regarding our services? Send us your message.
              </p>
            </div>
            <div>
              <section className="w-full">
                <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
                  <div>
                    <label className=" text-custom-black">Name:</label>
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      required
                      className="border rounded-lg w-full p-2"
                      placeholder="Your First Name"
                    />{" "}
                    <br /> <br />
                  </div>
                  <div>
                    <label className=" text-custom-black">Email:</label> <br />
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      required
                      className="border rounded-lg w-full p-2"
                      placeholder="Your Last Name"
                    />{" "}
                    <br /> <br />
                  </div>
                </div>
              </section>
              <section>
                <label className=" text-custom-black">Message</label> <br />
                <textarea
                  name=""
                  id=""
                  // cols="10"
                  // rows="10"
                  placeholder="Your Message"
                  className="border w-full p-2 rounded-lg"
                  required
                ></textarea>
                <br /> <br />
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    placeholder="title"
                    required
                  />
                  <br />
                  <label htmlFor="consent">
                    By ticking this box, I am consenting to be sent monthly
                    articles and promotions through tickuntech newsletter.
                  </label>
                </div>
                <br />
              </section>
            </div>
            <input
              className="bg-[#0c7d69] w-full p-2 rounded-lg text-white"
              type="submit"
              value="Submit"
              required
            />
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ContacMassage;
