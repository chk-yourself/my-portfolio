(function populateProjectDetails($) {
  // Start of use strict
  class Project {
    constructor(title, desc, devTags = [], desTags = [], url, overview = '') {
      this.title = title;
      this.desc = desc;
      this.devTags = devTags;
      this.desTags = desTags;
      this.url = url;
      this.overview = overview;
    }

    get cardElem() {
      return $(`[data-title="${this.title}"]`).parent();
    }
  }

  const projects = [
    new Project(
      'Lemonade',
      `<p>Lemonade is a todo-app that allows you to create, delete, edit, & store tasks, set due dates, pin priority items, add subtasks & notes, categorize tasks with custom, color-coded tags, create new lists & organize them into folders, and filter tasks by completion status, due date, tags, & keywords.</p>
      <h4 class="h4">UI Components include:</h4>
      <ul class="project__list">
      <li>interactive onboarding tour</li>
      <li>tag labeling system</li>
      <li>color picker</li>
      <li>calendar date picker to set due dates</li>
      <li>expanding search bar to filter tasks by tags and keywords</li>
      <li>modal forms</li>
      <li>tooltips</li>
      <li>sticky bulk actions toolbar</li>
      <li>accordion navigation</li>
      <li>breadcrumb navigation</li>
      <li>off-canvas navigation</li>
      </ul>`,
      ['JavaScript', 'JSON', 'HTML', 'CSS', 'SCSS'],
      ['UX/UI Design', 'Web Design', 'Responsive Design'],
      'https://chk-yourself.github.io/lemonade/',
      'a todo-app + UI component library, built with vanilla JS'
    ),
    new Project(
      'Makerbook Refresh',
      '<p>I rebuilt and redesigned <a class="link--inline" href="http://makerbook.net/">Makerbook</a>, a single-page application that features digital design resources, with a card-based layout and off-canvas menu to increase responsiveness, facilitate navigation, and present content in a more digestible format.</p>',
      ['React', 'React Router', 'Node/npm', 'Webpack', 'HTML', 'CSS', 'SCSS'],
      ['UX/UI Design', 'Web Design', 'Responsive Design'],
      'https://chk-yourself.github.io/makerbook-refresh/',
      'a single-page application redesign project'
    ),
    new Project(
      'Commercial Real Estate Agent Website',
      `<p>I designed and built a 5-page, responsive, corporate website for a commercial real estate agent, using Squarespace.</p>
      <p>I extended the Sonora template with custom CSS to reinforce the client's brand in the design.</p>
      <p>I also authored all written content and sourced supporting imagery that reflects the brand's voice and style.</p>`,
      ['HTML', 'CSS', 'Squarespace'],
      ['Web Design', 'Responsive Design', 'Branding', 'Content Strategy', 'Copywriting'],
      'https://anthonyhkim.com/',
      'a corporate branding + web design project'
    ),
    new Project(
      'Car Wash Website',
      `<p>I designed and built a 6-page, responsive, small business website for Celebrity Car Wash, using Squarespace.</p>
      <p>I extended the Pacific template with custom CSS to reinforce the client's brand in the design.</p>
      <p>I also authored all written content and sourced supporting imagery that reflects the brand's voice and style.</p>`,
      ['HTML', 'CSS', 'Squarespace'],
      ['Web Design', 'Responsive Design', 'Branding', 'Content Strategy', 'Copywriting'],
      'https://www.celebritycarwash.com/',
      'a small business branding + web design project'
    ),
    new Project(
      'Technical Documentation Page',
      `<p>I rebuilt React's step-by-step tutorial from scratch, including all functionality, UI components, and responsive layouts.</p>`,
      ['JavaScript', 'HTML', 'CSS', 'SCSS'],
      ['Responsive Design', 'Web Design'],
      'https://codepen.io/xtini/full/zLOLqj/',
      'a responsive technical documentation page'
    ),
    new Project(
      'Pomodoro Clock',
      `<p>I designed and built a simple timer app, modeled after the Pomodoro Technique, a time-management framework that involves breaking work into time blocks, separated by 5 minute breaks.</p>`,
      ['React', 'HTML', 'CSS', 'SCSS', 'SVG'],
      ['Web Design', 'UI Design'],
      'https://codepen.io/xtini/full/qJaLvb/',
      'a timer app to help boost productivity'
    ),
    new Project(
      'Punk Beer SPA',
      `<p>I designed and built a single-page app that transforms data pulled from the <a class="link--inline" href="https://punkapi.com/">Punk API</a> into an easily searchable, user-friendly product catalog for <a class="link--inline" href="https://www.brewdog.com/usa/">BrewDog</a> beers, using React and Redux.
      </p>
      <h4 class="h4">Features include:</h4>
      <ul class="project__list">
      <li>Customizable "Favorites" collection that persists to localStorage</li>
      <li>Search bar to search for beers by keywords, including name, ingredients, and food pairings</li>
      <li>Advanced filtering system to refine search results by ABV (alcohol strength), EBC (color), and IBU (hops concentration)</li>
      </ul>`,
      ['React', 'Redux', 'Node/npm', 'Webpack', 'HTML', 'CSS', 'SCSS'],
      ['Responsive Design', 'Web Design', 'UI Design'],
      'https://chk-yourself.github.io/punk-beer-app/',
      'an app for exploring, finding, & rating beers'
    )
  ];

  $('#projectDetailsModal').on('show.bs.modal', function(e) {
    const target = $(e.relatedTarget);
    const projectTitle = target.data('title');
    const project = projects.find(x => x.title === projectTitle);
    const projectDesc = project.desc;
    const devTags = project.devTags
      .map(tag => `<span class="project-tag project-tag--dev">${tag}</span>`)
      .join('');
    const desTags = project.desTags
      .map(tag => `<span class="project-tag project-tag--des">${tag}</span>`)
      .join('');
    const projectURL = project.url;
    const projectOverview = project.overview;
    const modal = $(this);
    modal.find('#projectTitle').text(projectTitle);
    modal.find('#projectTitle').attr('href', projectURL);
    modal.find('#projectOverview').text(projectOverview);
    modal.find('#projectDesc').html(projectDesc);
    modal.find('#devTags').html(devTags);
    modal.find('#desTags').html(desTags);
    modal.find('#projectLink').attr('href', projectURL);
  });

  projects.forEach(project => {
    const devTags = project.devTags
      .map(tag => `<span class="project-tag project-tag--dev">${tag}</span>`);
    const desTags = project.desTags
      .map((tag, i, arr) => `<span class="project-tag project-tag--des">${tag}</span>`);
    const allTags = [...devTags, ...desTags].join(', ');
    const projectOverview = project.overview;
    const card = project.cardElem;
    card.find('.card__tags').html(allTags);
    card.find('.project-overview').text(projectOverview);
  });
})(jQuery);
