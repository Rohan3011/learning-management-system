import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButtonGroup extends Schema.Component {
  collectionName: 'components_components_button_groups';
  info: {
    displayName: 'ButtonGroup';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    ButtonOne: Attribute.Component<'components.button'>;
    ButtonTwo: Attribute.Component<'components.button'>;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    type: Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost', 'link']
    >;
  };
}

export interface ComponentsCourseItem extends Schema.Component {
  collectionName: 'components_components_course_items';
  info: {
    displayName: 'Course';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentsCourseList extends Schema.Component {
  collectionName: 'components_components_course_lists';
  info: {
    displayName: 'CourseList';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    courses: Attribute.Component<'components.course-item', true>;
    title: Attribute.String;
    description: Attribute.Text;
    thumbnail: Attribute.Media;
    meta: Attribute.JSON;
    subtitle: Attribute.String;
  };
}

export interface ComponentsHeroSection extends Schema.Component {
  collectionName: 'components_components_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'star';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentsTestimonialList extends Schema.Component {
  collectionName: 'components_components_testimonial_lists';
  info: {
    displayName: 'TestimonialList';
    icon: 'bulletList';
  };
  attributes: {
    testimonials: Attribute.Component<'components.testimonial', true>;
  };
}

export interface ComponentsTestimonial extends Schema.Component {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: ' Testimonial';
    icon: 'quote';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    rating: Attribute.Integer;
    name: Attribute.String;
    position: Attribute.String;
    organization: Attribute.String;
    review: Attribute.Text;
  };
}

export interface ComponentsTitle extends Schema.Component {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'Title';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
  };
}

export interface GlobalNavbar extends Schema.Component {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'filter';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    cta: Attribute.Component<'components.button', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button-group': ComponentsButtonGroup;
      'components.button': ComponentsButton;
      'components.course-item': ComponentsCourseItem;
      'components.course-list': ComponentsCourseList;
      'components.hero-section': ComponentsHeroSection;
      'components.testimonial-list': ComponentsTestimonialList;
      'components.testimonial': ComponentsTestimonial;
      'components.title': ComponentsTitle;
      'global.navbar': GlobalNavbar;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
