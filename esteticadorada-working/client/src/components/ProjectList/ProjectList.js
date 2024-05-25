import React from 'react';
import ProjectFeature from '../Projectfeatures/ProjectFeature';
const ProjectList = () => {


  const projects = [

    {
      title: 'Surveillance and enforcement program: ',
      description:
      "The foundation has implemented the enforcement of a xxxxm2 non take zone. The surveillance team patrol the area for deter poachers, gurantee the park rules are respected and irresponsible vessel management or perturbation of the local marine life.",
      image: 'images/project1.jpg',
      link: '/projects/post/655a3d0cb87fcd752ec3cfe6',
    },
    {
      title: 'Marine laboratory: ',
      description:
      "The foundation have a partnership with AZUL restaurant for a small scale pilot laboratory oriented to marine larvae research and experimental coral restoration via land based microfragmentation. The lab also had been used for the rearing of the long spined sea urchin (Diadema antillarum), a keystone herbivore necessary for coral health and small pilot experiments started in mid 2023 oriented to study the relationship between corals and heat resistant zooxanthellae. We are currently aiming to restore our marine station near El Tablon Ecological Park in order to build up a large-scale marine station with a wide laboratory for coral production. In this sense we are currently in the search for the needed funding.",
      image: 'images/project2.jpg',
      link: '/about-us',
    },
    {
      title: 'Coral restoration: ',
      description:
      "Corals are colonial organisms which belongs to the phylum Cnidaria. Cnidarians are a group of aquatic invertebrates that includes jellyfish, sea anemones, hydroids, corals and hydrozooans. They are considered a keystone species for the coastal economy due to their hability to build up reef systems and tropical beaches, as well as support fisheries. These creatures are made up by polyps that constantly divide and reproduce either via sexual and asexual propagation by break up of polyps or pieces that can form new colonies with the same genetic identity.Our coral restoration approach follows a wide array of innovative techniques combined with standardized techniques for an adapted hybrid methodology well suited for the high energy at the north shore. Coral restoration is currently being done at medium scale via asexual reproduction. We rescue broken or damaged colonies and cut fragments to cultivate them in nurseries or outplant them back to the reef. We also grow fragments from healthy donor colonies and the most resilient genotypes in the hope they can cope with the future conditions, predicted for the ocean during the early Anthropocene which promises to be severely overfished, polluted, hot and more acidic due to the current human overpopulation and the derived widespread environmental damage being caused by us. We grow and restore corals within the follow methods:       ",
      image: 'images/project3.jpg',
      link: '/about-us',
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

