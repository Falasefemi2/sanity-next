import { getProjects } from '@/sanity/schemas/sanity-utils'
import Image from 'next/image';
import Link from 'next/link';


const Home = async () => {

  const projects = await getProjects();

  return (
    <div className='max-w-5xl mx-auto py-20'>
      <h1 className='text-7xl font-extrabold'>Hello I'm <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Femmie</span>!</h1>

      <p className="mt-3 text-xl text-gray-600">Aloha everyone! Check out my projects!</p>

      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>

      <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <Link href={`/project/${project.slug}`} key={project._id} className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'>

            {project.image && (
              <Image src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}

            <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>{project.name}</div>

          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
