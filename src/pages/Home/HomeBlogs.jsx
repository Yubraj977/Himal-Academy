import { Typography, Card, CardBody } from "@material-tailwind/react";
import school7 from '/school/school7.png'
import school8 from '/school/school8.jpeg'

function ContentCard({ img, title, desc }) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <CardBody className="relative flex flex-col justify-end">
        <Typography variant="h4" color="white">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="my-2 font-normal"
        >
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const contents = [
  {
    img: school7,
    title: "Science Project about adbk",
    desc: "Explore fascinating science projects covering biology, chemistry, physics, and more, showcasing students' curiosity and creativity in action..",
  },
  {
    img: school8,
    title: "Sales in vales",
    desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
  },
  {
    img: "https://t4.ftcdn.net/jpg/06/77/59/41/360_F_677594198_5WzQN6Tl7vBpq1VRQ9mrSM3F1lkOYm15.jpg",
    title: "Boxing Championship",
    desc: "The Boxing World Cup, also known as the Boxing World Series, is an international men's boxing competition, where our student won first price.",
  },
];

export function HomeBlogs() {
  return (
    <section className="container mx-auto px-8 py-10 lg:py-28">
      <Typography
        variant="h2"
        color="blue-gray"
        className="!text-2xl !leading-snug lg:!text-3xl"
      >
        Our Articles & Programs
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 max-w-lg !font-normal !text-gray-500"
      >
       Explore school updates, engaging articles, and student insights in our dynamic news section. Stay informed, inspired, and connected!.
      </Typography>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {contents.map(({ img, title, desc }) => (
          <ContentCard key={title} img={img} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}

export default HomeBlogs;