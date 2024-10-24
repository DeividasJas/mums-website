export default function Home({
  children,
  contacts,
}: {
  children: React.ReactNode;
  contacts: React.ReactNode;
}) {
  console.log(contacts);

  return (
    <>
      <p className='flex border border-orange-300 h-[1000px] justify-end items-end'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Unde molestias dolore et quidem blanditiis, neque minus enim perferendis
        quasi autem pariatur, at beatae explicabo eveniet dignissimos dolorum
        veritatis aperiam molestiae.
      </p>

      <p className="bg-slate-700 h-20">
        SHOULD BE CONTACTS HERE
        <br />
        {contacts}
      </p>
    </>
  );
}