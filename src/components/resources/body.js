import header from 'header.js';
import dwa_intro from 'dwa_intro.js';
import featured_stories from 'featured_stories.js';
import projects_gallery from 'projects_gallery.js';
import orphanage_oldAge from 'orphanage_oldAge.js';
import annual_reports from 'annual_reports.js';
import GetMoreInfo_donate from 'GetMoreInfo_donate.js';
import footer from 'footer.js';


export default function body_component() {
return (
   <body>
       <header />
       <dwa_intro />
       <featured_stories />
       <projects_gallery />
       <orphanage_oldAge />
       <annual_reports />
       <GetMoreInfo_donate />
       <footer />
   </body>
);
}
