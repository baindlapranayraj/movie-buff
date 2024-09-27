import { Box, Text } from "@radix-ui/themes"
import TrailersGrid from "./TraailerGrid"

const Bio = () => {

  const gener =["Superhero", "Fantasy", "Sci-Fi", "Action"]

  return (
    <div className="mt-56  p-20 pt-32">
      <h1 className="text-white text-4xl mb-10 font-bold underline font-mono">Loki Bio: </h1>
      <Box className="flex justify-between gap-16 items-start">
        <img className="w-72 rounded-xl" src="https://i.pinimg.com/564x/f6/69/b7/f669b70d7cf5ca6892a4e5c985784b7d.jpg" alt="" />
        <Box className="space-y-5">
          <Text className="text-white text-lg font-mono">Loki, the God of Mischief, is a cunning and complex character known for his charm, wit, 
            and ability <br /> to manipulate situations to his advantage. As the adopted brother of Thor, he often struggles with 
            jealousy and a desire for power, leading him to switch between antagonist and reluctant hero. Despite his 
            mischievous and deceptive nature, Loki shows depth and vulnerability, making him a character who constantly
             seeks recognition, redemption, and, ultimately, his place in the universe. His unpredictable nature makes him
              both feared and admired.
          </Text>
          <h1 className="text-white text-xl  font-mono underline">Gener:</h1>
          <Box className="flex gap-2 text-white">
          {
            gener.map((name,i)=>(
              <Text key={i} className="bg-zinc-800 py-2 px-4 rounded-lg cursor-pointer hover:bg-zinc-700 duration-200">{name}</Text>
            ))
          }
          </Box>
          <h1 className="text-white text-xl  font-mono underline">Trailers:</h1>
          <TrailersGrid/>
        </Box>
      </Box>
    </div>
  )
}

export default Bio