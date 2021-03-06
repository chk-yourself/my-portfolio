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
      'Workflow',
      `<p>Workflow is a project management single-page application, inspired by Asana and Trello, and built with React, Redux, and Firebase, where users can create shared projects as mobile-friendly, drag-and-drop Kanban boards or todo lists, and collaborate in real-time. <a class="link--inline" href="https://github.com/chk-yourself/workflow">View on GitHub</a></p>
      <h4 class="h4">Features include:</h4>
      <ul class="project__list">
      <li>real-time collaboration across multiple users</li>
      <li>user authentication & presence detection</li>
      <li>mobile-friendly, drag-and-drop Kanban boards and todo lists</li>
      <li>custom rich text editor with mentions support</li>
      <li>calendar date picker to set due dates</li>
      <li>typeahead search to quickly find tasks by name, project, tags, or keywords</li>
      <li>task sorting, filtering, and prioritizing</li>
      <li>task labeling with color-coded tags</li>
      <li>user <a class="link--inline" href="https://wrkflw.cf/guide">guide</a> to onboard new users</li>
      <li>task comments with relative timestamps</li>
      <li>subtasks to break down tasks into smaller steps</li>
      <li>activity notifications</li>
      <li>+ more</li>
      </ul>`,
      ['React', 'Redux', 'Firebase', 'Node', 'HTML', 'CSS', 'SCSS'],
      ['UX/UI Design', 'Web Design', 'Responsive Design'],
      'https://wrkflw.cf',
      'a real-time, project management app, inspired by Asana and Trello'
    ),
    new Project(
      'Lemonade',
      `<p>Lemonade is a todo-app that allows you to create, delete, edit, & store tasks, set due dates, pin priority items, add subtasks & notes, categorize tasks with custom, color-coded tags, create new lists & organize them into folders, and filter tasks by completion status, due date, tags, & keywords. <a class="link--inline" href="https://github.com/chk-yourself/lemonade">View on GitHub</a></p>
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
      `<p>I rebuilt and redesigned Makerbook (<a class="link--inline" href="http://makerbook.net/">view original design</a>), a single-page application that features digital design resources, with a card-based layout and off-canvas menu to increase responsiveness, facilitate navigation, and present content in a more digestible format. <a class="link--inline" href="https://github.com/chk-yourself/makerbook-refresh">View on GitHub</a></p>`,
      ['React', 'HTML', 'CSS', 'SCSS'],
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
      `<p>I designed and built a single-page app that transforms data pulled from the <a class="link--inline" href="https://punkapi.com/">Punk API</a> into an easily searchable, user-friendly product catalog for <a class="link--inline" href="https://www.brewdog.com/usa/">BrewDog</a> beers, using React and Redux. <a class="link--inline" href="https://github.com/chk-yourself/punk-beer-app">View on GitHub</a>
      </p>
      <h4 class="h4">Features include:</h4>
      <ul class="project__list">
      <li>Customizable "Favorites" collection that persists to localStorage</li>
      <li>Search bar to search for beers by keywords, including name, ingredients, and food pairings</li>
      <li>Advanced filtering system to refine search results by ABV (alcohol strength), EBC (color), and IBU (hops concentration)</li>
      </ul>
      `,
      ['React', 'Redux', 'HTML', 'CSS', 'SCSS'],
      ['Responsive Design', 'Web Design', 'UI Design'],
      'https://chk-yourself.github.io/punk-beer-app/',
      'an app for exploring, finding, & rating beers'
    ),
    new Project(
      'Flume',
      `<p>I built a dependency-free, flexible plugin for creating responsive, highly-customizable, touch-enabled sliders + carousels with ease. <a class="link--inline" href="https://github.com/chk-yourself/flume">View on GitHub</a></p>
      <h4 class="h4">Features:</h4> 
      <ul class="project__list">
      <li>Responsive Design</li>
      <li>Touch/swipe support</li>
      <li>CSS3 Sliding Transitions</li>
      </ul>
      <h4 class="h4">Customizable settings include:</h4>
      <ul class="project__list">
      <li>Infinite loop</li>
      <li>Autoplay</li>
      <li>Dot indicators</li>
      <li>Arrow indicators</li>
      </ul>`,
      ['JavaScript', 'HTML', 'CSS', 'SCSS'],
      ['Responsive Design', 'Web Design', 'UI Design'],
      'https://chk-yourself.github.io/flume/',
      'a dependency-free, modern slider/carousel plugin'
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
    const devTags = project.devTags.map(
      tag => `<span class="project-tag project-tag--dev">${tag}</span>`
    );
    const desTags = project.desTags.map(
      (tag, i, arr) => `<span class="project-tag project-tag--des">${tag}</span>`
    );
    const allTags = [...devTags, ...desTags].join(', ');
    const projectOverview = project.overview;
    const card = project.cardElem;
    card.find('.card__tags').html(allTags);
    card.find('.project-overview').text(projectOverview);
  });
})(jQuery);
