import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className='w-full mt-8 bg-[#e8dbaf] p-20 flex flex-col md:flex-row'>
      <iframe className='w-full md:w-2/5 h-96 outline-none mb-9' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.8394148582834!2d-0.0553545877973214!3d51.552843571706255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d861b1591c9%3A0xc148016c44c9b85!2sMambow!5e0!3m2!1sen!2sdz!4v1723020744988!5m2!1sen!2sdz"   loading="lazy" ></iframe>
      <div className=' flex-1 flex justify-center'>
        <div className='flex flex-col '>
            <h2 className='text-xl mb-2'>Read about Mambow : </h2>
            <a href="https://fr.tripadvisor.be/Restaurant_Review-g186338-d25091288-Reviews-Mambow-London_England.html" target='_blank' className='text-[#0000CC] underline'>tripadvisor reviews</a>  <br />
            <a href="https://londontheinside.com/mambow-review/" target='_blank' className='text-[#0000CC] underline'>Londontheinside review</a>  <br />
            <a href="https://www.squaremeal.co.uk/restaurants/mambow_16356" target='_blank' className='text-[#0000CC] underline'>Squaremeal's article</a>  <br />
            <a href="https://www.timeout.com/london/restaurants/mambow-2" target='_blank' className='text-[#0000CC] underline'>Timeout's article</a>  <br />
            <a href="https://www.standard.co.uk/going-out/restaurants/mambow-london-restaurant-review-claptopn-b1131400.html" target='_blank' className='text-[#0000CC] underline'>The standard's article</a>  <br />
            <a href="https://www.independent.co.uk/indy-eats/mambow-clapton-london-restaurant-review-b2473265.html" target='_blank' className='text-[#0000CC] underline'>The independent's article</a>  <br />
            <h2 className='text-xl mb-2 mt-4'>Contact : </h2>
            <p>General enquiries - <a href="mailto:info@mambow.co.uk" className="underline">info@mambow.co.uk</a></p>
            <p>Reservation enquiries - <a href="mailto:Mambow@hello.sevenrooms.com" className="underline">Mambow@hello.sevenrooms.com</a></p>
            <a href="https://www.instagram.com/mambow_ldn/?hl=en" target='_blank' className="my-4 flex items-center gap-1 hover:underline transition duration-300"><FaInstagram size={20}/> Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
