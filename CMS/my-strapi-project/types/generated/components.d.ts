import type { Schema, Attribute } from '@strapi/strapi';

export interface TestSkill extends Schema.Component {
  collectionName: 'components_test_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    skill: Attribute.String;
  };
}

export interface TestImageWithBulletPoints extends Schema.Component {
  collectionName: 'components_test_image_with_bullet_points';
  info: {
    displayName: 'ImageWithBulletPoints';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.skill': TestSkill;
      'test.image-with-bullet-points': TestImageWithBulletPoints;
    }
  }
}
