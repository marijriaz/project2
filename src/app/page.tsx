export default function Home() {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img className="w-24 h-24 rounded-full mx-auto object-cover" src="/picture.png" alt="picture" width="384" height="512"/>
      <div className="pt-6 space-y-4">
        <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500">
        Marij
      </div>
      <div>
        Research Assisant, UOS-IDRC, Pakistan
      </div>
    </figcaption>
  </div>
</figure>
  );
}
