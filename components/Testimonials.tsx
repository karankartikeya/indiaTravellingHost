import Carousel from 'better-react-carousel';


const Testimonials = ({  }) => {
  const Component = 'div';
  return (
    <Component >
      <div className='hidden md:block flex flex-col relative overflow-hidden mt-10 text-left md:flex-row max-w-full px-10 md:justify-evenly space-y-44 mx-auto items-center'>
      <h1 className='absolute top-24 uppercase text-4xl font-bold text-dark-blue lg:text-6xl mb-24'>
          Testimonials
        </h1>
        <div className='flex flex-col mt-24 gap-4'>
          <Carousel
            cols={3}
            rows={1}
            gap={20}
            autoplay={2500}
            dotColorActive='rgb(89,66,233)'
            showDots
            loop
          >
            {data.map((item) => (
              <Carousel.Item key={1}>
                <TestimonialCard/>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </Component>
  );
};

export default Testimonials;

const TestimonialCard = ({}) => {
  return (
    <div className='mb-10 flex h-full w-full flex-col items-center justify-center rounded-lg border border-content/20 bg-gradient-to-br from-content/0 to-content/10 p-4 py-8 text-center lg:flex-1'>
      <img
        alt='testimonial'
        className=' mb-2 inline-block h-20 w-20 rounded-full border-2 border-base-100 bg-base-100/10 object-cover object-center'
        src='/logo.jpeg'
      />
      <p className='text-lg'>Description</p>
      <hr className='styled-hr styled-hr--light mx-auto my-4' />
      <h2 className='text-sm font-medium text-content '>Twitter</h2>
      <p className='text-content/80'>Developer</p>
    </div>
  );
};

const data = [
  {
  
    description:
      "The way this guy is teaching me Java is just Mind Blowing and Brilliant. I've never thought that these topics would be that much easier. Kudos to @kunalstwt #DSAwithKunal",
    from: 'RAHUL KUMAR',
    designation: '@rahulstwt_',
  },
  {
  
    description:
      "Thanks @kunalstwt for helping me understand the benefits of Binary Search and how it's a lot effective than linear search. Understood the theory now and will be solving questions with @WeMakeDevs and build up the concept. #DSAwithKunal",
    from: 'EKJOT SINGH',
    designation: '@Ekjotmakhija',
  },
  {
    
    description:
      'Done with amazing playlist of Object Oriented Programming by @kunalstwt bhaiya. Every concept was explained very well and got to know so many new things. Thanks kunal bhaiya for such an amazing playlist. #DSAwithKunal',
    from: 'SAJJAN YADAV',
    designation: '@SajjanStr',
  },
  {
   
    description:
      "Completed @kunalstwt's DevOps bootcamp networking video. Really awesome explanation, got a clear overview of whole networking process. Application layer is perfectly understood. #DevOpswithkunal  #networking",
    from: 'ANURAG PATHAK',
    designation: '@AnuragThePathak',
  },
  {
    
    description:
      'Finally, completed 4 hour long video on computer networking. Amazing content @kunalstwt. Thanks for creating such an educational content for us 🙌🙌 #DevOpswithkunal',
    from: 'Prasanna',
    designation: '@gramopadhye37',
  },
  {
   
    description:
      'What an explanation 🔥 on recursion! This dsa course is just absolutely amazing. Thank you Kunal Kushwaha for this amazing course. #DSAwithKunal #dsa',
    from: 'Siva Nithin',
    designation: '@GSIVANITHIN',
  },
];
