import React from 'react'

interface ContactCardProps {
  icon: string
  title: string
  content: string
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col max-w-full rounded-none">
      <div className="flex flex-col items-start px-8 py-8 rounded-2xl border-solid bg-[linear-gradient(180deg,rgba(255,255,255,0.30_0%,rgba(255,255,255,0.10)_100%))] border-[0.695px] border-white border-opacity-20">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain rounded-full aspect-[1.02] stroke-[0.695px] stroke-white stroke-opacity-20 w-[45px]"
        />
        <div className="mt-7 text-xs font-semibold leading-5">{title}</div>
        <div className="mt-2.5 text-lg font-bold leading-none">{content}</div>
      </div>
    </div>
  )
}

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col mt-14 text-white whitespace-nowrap">
      <ContactCard
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9358eb4b-6c29-43d4-a98e-51c9623f5751?placeholderIfAbsent=true&apiKey=5f524bd46aa3436493fe38ccee96f4fd"
        title="Phone"
        content="+xxxxxxxxx"
      />
      <ContactCard
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6237f94a-0aa7-4210-b9af-6f76d61add8b?placeholderIfAbsent=true&apiKey=5f524bd46aa3436493fe38ccee96f4fd"
        title="Email"
        content="support@dheeraj"
      />
    </div>
  )
}

export default ContactInfo
