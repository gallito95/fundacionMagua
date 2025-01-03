import React from 'react'
import {Link} from 'react-router-dom'
import './BlogHeader.scss'

enum CategoryPath {
  ALL = "/projects/",
  EDUCATION = "/projects/?cat=education",
  MANGROVE = "/projects/?cat=mangrove",
  SCUBA = "/projects/?cat=scuba",
  UNICORN = "/projects/?cat=unicorn",
  CORALS = "/projects/?cat=corals",
  OTHER = "/projects/?cat=other",
}

type Category = {
  name: string;
  path: CategoryPath;
}

const BlogHeader: React.FC = () => {
 

  const categories: Category[] = [
    { name: "All", path: CategoryPath.ALL },
    { name: "Education", path: CategoryPath.EDUCATION },
    { name: "Mangrove", path: CategoryPath.MANGROVE },
    { name: "Scuba Diving", path: CategoryPath.SCUBA },
    { name: "Project Unicorn", path: CategoryPath.UNICORN },
    { name: "Corals", path: CategoryPath.CORALS },
    { name: "Other", path: CategoryPath.OTHER },
 ]

  return (
    <header >
            <div className='blogHeaderContainer'>
             <div className='categoryContainer'>
            <h3>Categories:</h3>
            <div className="blogLinkContainer">
              {categories.map((category) => (
               <Link key={category.path} to={category.path}>
                   {category.name}
                </Link>
              ))}
            </div>
            </div>
            </div>    
          </header>
  )
}

export default BlogHeader