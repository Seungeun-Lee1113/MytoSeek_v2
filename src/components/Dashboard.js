import React from 'react';

const Dashboard = () => {
  return (
    <div className="w-[1440px] h-[1024px] pl-[35px] pr-[274px] pt-[92px] pb-[110px] bg-white justify-start items-center gap-7 inline-flex">
      <div className="w-[323px] h-[822px] pb-4 bg-white shadow flex-col justify-start items-center inline-flex">
        <div className="self-stretch h-[100px] pt-10 flex-col justify-start items-start gap-[11px] flex">
          <div className="self-stretch h-12 px-4 flex-col justify-start items-start gap-[30px] flex">
            <div className="pr-3 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="w-12 h-12 relative">
                <div className="w-8 h-8 left-[8px] top-[8px] absolute bg-gray-100 rounded-full" />
                <div className="w-5 h-5 left-[14px] top-[14px] absolute">
                  <div className="w-5 h-5 left-0 top-0 absolute bg-white/opacity-0" />
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-sky-950 text-base font-normal">9394lay@gmail.com</div>
                <div className="text-slate-400 text-xs font-normal">www.mingcute.com</div>
              </div>
            </div>
          </div>
          <div className="w-[304px] h-px justify-center items-center inline-flex">
            <div className="w-[304px] h-px bg-neutral-800/opacity-10" />
          </div>
        </div>
        <div className="w-[319px] h-[35px] p-3 bg-gray-100 rounded justify-start items-center gap-4 inline-flex">
          <div className="w-6 h-6 relative"></div>
          <div className="text-sky-950 text-base font-normal">Log out</div>
        </div>
        <div className="self-stretch h-96 flex-col justify-start items-start flex">
          <div className="w-[304px] px-4 py-3 justify-start items-start gap-8 inline-flex">
            <div className="w-6 h-6 px-0.5 py-[2.50px] justify-center items-center flex"></div>
            <div className="grow shrink basis-0 text-black/opacity-60 text-sm font-medium">Version 1_240512</div>
          </div>
          <div className="w-[304px] px-4 py-3 justify-start items-start gap-8 inline-flex">
            <div className="w-6 h-6 px-0.5 py-[2.50px] justify-center items-center flex"></div>
            <div className="grow shrink basis-0 text-black/opacity-60 text-sm font-medium">Version 1_240512</div>
          </div>
          <div className="self-stretch px-4 py-3 justify-start items-start gap-8 inline-flex">
            <div className="w-6 h-6 px-0.5 py-[2.50px] justify-center items-center flex"></div>
            <div className="grow shrink basis-0 text-black/opacity-60 text-sm font-medium">Version 2_240518</div>
          </div>
          <div className="self-stretch px-4 py-3 bg-purple-400/opacity-10 justify-start items-start gap-8 inline-flex">
            <div className="w-6 h-6 px-0.5 py-[2.50px] justify-center items-center flex"></div>
            <div className="text-violet-700 text-sm font-medium">Version 3_240601_added sarcoma</div>
          </div>
          <div className="self-stretch px-4 py-3 justify-start items-start gap-8 inline-flex">
            <div className="w-6 h-6 px-0.5 py-[2.50px] justify-center items-center flex"></div>
            <div className="grow shrink basis-0 text-black/opacity-60 text-sm font-medium">Version 4_240630</div>
          </div>
          <div className="self-stretch px-4 py-3 justify-start items-start gap-8 inline-flex">
            <div className="w-6 h-6 px-0.5 py-[2.50px] justify-center items-center flex"></div>
            <div className="grow shrink basis-0 text-black/opacity-60 text-sm font-medium">Version 5_240710_added LUAD</div>
          </div>
          <div className="self-stretch px-4 py-3 justify-start items-start gap-8 inline-flex">
            <div className="w-6 h-6 px-0.5 py-[2.50px] justify-center items-center flex"></div>
            <div className="grow shrink basis-0 text-black/opacity-60 text-sm font-medium">Version 6_240712</div>
          </div>
          <div className="self-stretch px-4 py-3"></div>
        </div>
        <div className="w-[221px] h-[45px] pl-2 pr-4 py-1.5 bg-white rounded-lg border border-zinc-500 justify-center items-center gap-2 inline-flex">
          <div className="w-[18px] h-[18px] justify-center items-center flex">
            <div className="w-[18px] h-[18px] relative">
              <div className="w-[18px] h-[18px] left-0 top-0 absolute"></div>
            </div>
          </div>
          <div className="text-center text-zinc-900 text-sm font-medium">MytoSeek</div>
        </div>
      </div>
      <img className="w-[780px] h-[711px]" src="https://via.placeholder.com/780x711" alt="Dashboard image placeholder" />
    </div>
  );
};

export default Dashboard;
