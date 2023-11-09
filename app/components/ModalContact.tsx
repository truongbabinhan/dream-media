import React from "react";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  name: string;
  jobType: string;
  budget: string;
  timeline: string;
  details: string;
  other: string;
};

const jobTypeData = [
  {
    value: "TV Commercials (TVC)",
    id: "jobtype-commercials",
  },
  {
    value: "Viral Videos",
    id: "jobtype-videoViral",
  },
  {
    value: "Digital Content Video",
    id: "joptype-digital",
  },
  {
    value: "Post-Production",
    id: "jobtype-postProduction",
  },
  {
    value: "Live Stream",
    id: "jobtype-liveStream",
  },
  {
    value: "Short Films",
    id: "jobtype-shortFilms",
  },
  {
    value: "Design/Branding",
    id: "jobtype-branding",
  },
  {
    value: "Website",
    id: "jobtype-website",
  },
];

const budgetData = [
  {
    value: "Under $10k",
    id: "budget-10k",
  },
  {
    value: "$10k-$20k",
    id: "budget-20k",
  },
  {
    value: "$20k-$50k",
    id: "budget-50k",
  },
  {
    value: "$50-$100k",
    id: "budget-100k",
  },
  {
    value: "$100k +",
    id: "budget-plus",
  },
];

const timelineData = [
  {
    value: "7 days",
    id: "timeline-7days",
  },
  {
    value: "15 days",
    id: "timeline-15days",
  },
  {
    value: "30 days",
    id: "timeline-30days",
  },
  {
    value: "Over 30 days ",
    id: "timeline-over30days",
  },
];
interface ModalProps {
  open: boolean;
  setOpen: any;
}
export const ModalContact = ({ open, setOpen }: ModalProps) => {
  const closeModal = () => setOpen(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <div
        style={{ fontFamily: "Livemono" }}
        className="w-[950px] max-lg:w-[calc(100%-40px)] max-lg:mx-auto backdrop-blur-[30px] bg-[linear-gradient(142deg,rgba(180,180,180,0.60)_4.12%,rgba(217,217,217,0.10)_96.41%)] rounded-[20px] overflow-hidden text-[15px] transition-all ease-in-out delay-150"
      >
        <div className="h-10">
          <a
            className="absolute right-[18px] top-[13px] cursor-pointer"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M4.96667 6.22992L0 0.814453H2.07778L6 5.09698L9.92222 0.814453H12L7.04444 6.22992L12 11.6454H9.92222L6 7.36287L2.07778 11.6454H0L4.96667 6.22992Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="py-[30px] px-[35px] max-h-[562px] overflow-auto">
          <div className="flex flex-col gap-5">
            <p>For all inquiries, please contact hello@dreammedia.vn</p>
            <p>
              For DREAM MEDIA content and updates, drop in your email below.{" "}
              <br />
              We’re looking forward to connecting with you.
            </p>
            <form onSubmit={onSubmit} className="flex flex-col">
              <div className="flex max-lg:flex-col max-lg:gap-4 justify-between items-center max-lg:justify-start max-lg:items-start px-[30px] py-[25px] border-b border-b-[#FFFFFF]">
                <label className="flex-1">Your Name:</label>
                <input
                  type="text"
                  className="bg-transparent border-none outline-none w-[40%] max-lg:w-full placeholder:text-[#C9C9C9] placeholder:text-[12px]"
                  placeholder="Enter name"
                  {...register("name")}
                  required
                />
              </div>
              <div className="flex max-lg:flex-col max-lg:gap-4 justify-between items-center max-lg:justify-start max-lg:items-start px-[30px] py-[25px] border-b border-b-[#FFFFFF]">
                <label className="flex-1">Your Email:</label>
                <input
                  type="text"
                  className="bg-transparent border-none outline-none w-[40%] max-lg:w-full placeholder:text-[#C9C9C9] placeholder:text-[12px]"
                  placeholder="Enter email"
                  {...register("email")}
                  required
                />
              </div>
              <div className="flex max-lg:flex-col max-lg:gap-4 justify-between items-start max-lg:justify-start max-lg:items-start px-[30px] py-[25px] border-b border-b-[#FFFFFF]">
                <label className="flex-1">What can we do for you?</label>
                <div className="flex flex-col w-[40%] max-lg:w-full gap-2">
                  {jobTypeData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex justify-start items-center gap-2"
                      >
                        <input
                          {...register("jobType")}
                          type="radio"
                          value={item.value}
                          id={item.id}
                        />
                        <label className="cursor-pointer" htmlFor={item.id}>
                          {item.value}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex max-lg:flex-col max-lg:gap-4 justify-between items-start max-lg:justify-start max-lg:items-start px-[30px] py-[25px] border-b border-b-[#FFFFFF]">
                <label className="flex-1">Budget in USD</label>
                <div className="flex flex-col w-[40%] max-lg:w-full gap-2">
                  {budgetData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex justify-start items-center gap-2"
                      >
                        <input
                          {...register("budget")}
                          type="radio"
                          value={item.value}
                          id={item.id}
                        />
                        <label className="cursor-pointer" htmlFor={item.id}>
                          {item.value}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex max-lg:flex-col max-lg:gap-4 justify-between items-start max-lg:justify-start max-lg:items-start px-[30px] py-[25px] border-b border-b-[#FFFFFF]">
                <label className="flex-1">Your estimated timeline</label>
                <div className="flex flex-col w-[40%] max-lg:w-full gap-2">
                  {timelineData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex justify-start items-center gap-2"
                      >
                        <input
                          {...register("timeline")}
                          type="radio"
                          value={item.value}
                          id={item.id}
                        />
                        <label className="cursor-pointer" htmlFor={item.id}>
                          {item.value}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex max-lg:flex-col max-lg:gap-4 justify-between items-start max-lg:justify-start max-lg:items-start px-[30px] py-[25px] border-b border-b-[#FFFFFF]">
                <label className="flex-1">Project Details</label>
                <textarea
                  rows={5}
                  className="bg-transparent border-none outline-none w-[40%] max-lg:w-full placeholder:text-[#C9C9C9] placeholder:text-[12px]"
                  placeholder="Enter name"
                  {...register("details")}
                />
              </div>
              <div className="flex max-lg:flex-col max-lg:gap-4 justify-between items-start max-lg:justify-start max-lg:items-start px-[30px] py-[25px]">
                <label className="flex-1">Other Information</label>
                <textarea
                  rows={5}
                  className="bg-transparent border-none outline-none w-[40%] max-lg:w-full placeholder:text-[#C9C9C9] placeholder:text-[12px]"
                  placeholder="Enter name"
                  {...register("other")}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="h-[70px] flex justify-end items-center px-[35px] border-t-white border-t">
          <div
            onClick={() => onSubmit()}
            className="rounded-[30px] px-[15px] h-[35px] bg-[#EBEEF3] cursor-pointer text-center inline-block"
          >
            <p style={{ lineHeight: "35px" }} className="text-[#1E1E1E]">
              SUBMIT
            </p>
          </div>
        </div>
      </div>
    </Popup>
  );
};
