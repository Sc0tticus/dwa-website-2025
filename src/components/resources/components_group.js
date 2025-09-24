import header from 'src/components/resources/header.js';
import dwa_intro from 'src/components/resources/dwa_intro.js';
import featured_stories from 'src/components/resources/featured_stories.js';
import projects_gallery from 'src/components/resources/projects_gallery.js';
import orphanage_oldAge from 'src/components/resources/orphanage_oldAge.js';
import annual_reports from 'src/components/resources/annual_reports.js';
import GetMoreInfo_donate from 'src/components/resources/GetMoreInfo_donate.js';
import footer from 'src/components/resources/footer.js';


export default function body_component() {
return (
   <div>   
       <header />
       <dwa_intro />
       <featured_stories />
       <projects_gallery />
       <orphanage_oldAge />
       <annual_reports />
       <GetMoreInfo_donate />
       <footer />
   </div>
);
}
