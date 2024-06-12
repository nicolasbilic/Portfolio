import { formatDate } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({ entry, pill }: Props) {
  return (
    <a href="https://front-gaming-app.vercel.app/" target="_blank" class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out">
      <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2">
          {pill &&
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">
              {entry.collection === "blog" ? "post" : "project"}
            </div>
          }
        </div>
        <div class="font-semibold mt-3 text-black dark:text-white mb-5">
          {entry.data.title}
        </div>
        <img src="/ludus-studios-project.webp" alt="Ludus Studios, site vitrine projet pour une entreprise de jeux-vidéos" />
      </div>
    </a>
  )
}