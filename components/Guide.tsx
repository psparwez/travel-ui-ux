import Image from "next/image"

const Guide = () => {
  return (
    <section className="flexCenter flex-col ">
      <div className="padding-container max-container w-full pb-24 ">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}

        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50   ">We are here for you</p>

        <div className="flex flex-wrap  justify-between gap-5  lg:gap-10 ">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]  ">Guide You to Easy Path</h2>
          <p className="regular-16 to-gray-30 xl:max-w-[520px] ">
            Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps  when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the winlderness through the valley and reach the top of the mountain.
          </p>

        </div>
      </div>


      <div className="flexCenter max-container  w-full relative ">
        <Image
          src='/boat.png'
          alt="boat"
          width={1440}
          height={500}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 shadow-md md:left-[5%] gap-3 pr-7 rounded-3xl border lg:top-20 ">

          <Image
            src='/meter.svg'
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />


          <div className="flexBetween flex-col">

            <div className="w-full flex-col flex ">
              <div className="flexBetween w-full">
                <p className="regular-16 to-gray-20 ">Destination</p>
                <p className="bold-16 text-green-50 ">48 min</p>
              </div>
              <p className="bold-20 mt-2">Augus Callients</p>
            </div>
            <div className="w-full flex-col flex ">
              <p className="regular-16 to-gray-20 ">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap ">Wonorejo Pesuruan</h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide