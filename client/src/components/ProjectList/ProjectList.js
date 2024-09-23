import React from 'react';
import ProjectFeature from '../Projectfeatures/ProjectFeature';
const ProjectList = () => {


  const projects = [

    {
      title: 'Training and Environmental Education',
      description:
      "In our ongoing efforts to foster a sense of environmental stewardship among the younger members of our community, we have implemented a comprehensive training and educational program specifically designed for children and young people in Sosúa. The primary objective of this initiative is to instill a deep-rooted awareness of environmental issues, with a particular focus on the care and preservation of our precious coastal and marine resources.",
      image: 'images/project1.jpg',
      link: 'projects/education',
    },
    {
      title: 'Breeding Ground for Marine Species ',
      description:
      "The implementation of rigorous protection measures and the strategic placement of artificial structures within the project area have led to a significant increase in the reef fish population. These efforts are part of a broader initiative aimed at conserving marine biodiversity and fostering the sustainable reproduction of various fish species. By creating an environment conducive to fish breeding and growth, we have observed remarkable improvements in the health and diversity of marine life in our targeted locations.",
      image: 'images/project2.jpg',
      link: 'projects/breeding',
    },
    {
      title: 'Mangrove Restoration ',
      description:
      "Mangrove reforestation in the Sosúa River estuary has been an ongoing effort employing various innovative and traditional methods to ensure the successful restoration of this critical ecosystem. These efforts have led to the recovery of substantial linear meters of mangroves throughout the entire estuary, significantly enhancing the ecological health and resilience of the area. ",
      image: 'images/project3.jpeg',
      link: 'projects/mangrove',
    },
    // Füge hier weitere Projekte hinzu
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectFeature key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;

