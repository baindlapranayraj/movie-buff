import { Box, Flex, Text } from "@radix-ui/themes";

const Home = () => {
  return (
    <Box className="p-10 lg:p-20 lg:px-32 lg:pt-32 bg-black min-h-screen">
      <Flex className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
        <Box className="flex flex-col items-start justify-start space-y-6">
          <img
            className="w-56 lg:w-72 rounded-lg shadow-lg transform transition duration-500"
            src="https://i.pinimg.com/564x/a3/f3/0f/a3f30ff9f2da305591be99af83a06bf0.jpg"
            alt="Loki"
          />
          <Text className="text-white text-base lg:text-lg font-mono leading-relaxed tracking-wide">
            Loki, the God of Mischief, is a cunning and charismatic character
            <br /> who oscillates between villain and anti-hero.
            <br /> Known for his wit and charm, Loki constantly seeks power
            while
            <br />
            grappling with his identity and redemption,
            <br /> making him a fan favorite in the Marvel Universe.
          </Text>
        </Box>
        <img
          className="w-60 lg:w-80 rounded-3xl object-cover shadow-2xl transform transition duration-500 hover:scale-105"
          src="https://i.pinimg.com/736x/f2/3d/31/f23d3198daa14d4c5a83b1a7f51f43f1.jpg"
          alt="Loki Cinematic"
        />
      </Flex>
    </Box>
  );
};

export default Home;
