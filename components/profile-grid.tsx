import Image from "next/image"

const profiles = Array(12).fill(null).map((_, i) => ({
  id: i,
  image: `/placeholder.svg?text=${i + 1}`
}))

export function ProfileGrid() {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto my-16">
      {profiles.map((profile, i) => (
        <div
          key={profile.id}
          className="relative w-24 h-24 rounded-full overflow-hidden"
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={profile.image}
              alt="Team member"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

