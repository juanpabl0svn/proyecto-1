export default function Calendar() {
  return (
    <aside>
      <h1 className="text-center text-2xl my-10">Calendar</h1>
      <article className="grid grid-cols-7 mx-auto text-center w-[clamp(700px,80vw,1100px)] mb-10">
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </article>
      <article className="grid grid-cols-7 mx-auto  w-[clamp(700px,80vw,1100px)]">
        {Array.from({ length: 30 }).map((_, i) => (
          <div className="w-full aspect-square border border-black dark:border-white pl-1 pt-1">
            <p>{i}</p>
            {(i == 5 || i == 10 || i == 14 || i == 24 || i == 29) && (
              <ul className="list-inside">
                <li className="cursor-pointer flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div> Event
                </li>
              </ul>
            )}
          </div>
        ))}
      </article>
      <article></article>
    </aside>
  );
}
