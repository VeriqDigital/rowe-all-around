import Image from "next/image";

const WorkSection = () => (
  <div>
    <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9fd18c]">
          Recent clearing work
        </p>
        <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.88] tracking-[-0.03em] text-white sm:text-7xl">
          The work speaks for itself.
        </h2>
      </div>
      <p className="max-w-xl text-lg leading-8 text-white/65 lg:justify-self-end">
        Actual Precision project photography—from overgrown conditions to open,
        usable ground and the equipment that makes the transformation happen.
      </p>
    </div>
    <div className="mt-12 grid auto-rows-[18rem] gap-3 sm:auto-rows-[22rem] md:grid-cols-12">
      <figure className="group relative overflow-hidden md:col-span-8 md:row-span-2">
        <Image
          src="/644533361_122214584234565330_6554280238336667759_n.jpg"
          alt="Precision land clearing machine on a cleared wooded property"
          fill
          className="object-cover object-[58%_60%] transition duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </figure>
      <figure className="group relative overflow-hidden md:col-span-4">
        <Image
          src="/753503103_122234279858565330_1769672164975204912_n.jpg"
          alt="View from land clearing equipment facing dense vegetation"
          fill
          className="object-cover object-[center_30%] transition duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </figure>
      <figure className="group relative overflow-hidden md:col-span-4">
        <Image
          src="/738523346_122231588426565330_1895043176923264203_n.jpg"
          alt="Cleared edge of a property after vegetation removal"
          fill
          className="object-cover object-[center_72%] transition duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </figure>
      <figure className="group relative overflow-hidden md:col-span-5">
        <Image
          src="/770609169_122236434722565330_5168401742005820719_n.jpg"
          alt="Aerial view of opened ground beneath a tree canopy"
          fill
          className="object-cover object-[center_65%] transition duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 42vw"
        />
      </figure>
      <figure className="group relative overflow-hidden md:col-span-7">
        <Image
          src="/678380041_122222319836565330_9204077539104563223_n.jpg"
          alt="Precision land clearing equipment arriving at a property"
          fill
          className="object-cover object-[center_64%] transition duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 58vw"
        />
      </figure>
    </div>
  </div>
);

export default WorkSection;
