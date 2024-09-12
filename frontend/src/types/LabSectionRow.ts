
export type LabSectionRow = {
    Image: {
      data: {
        attributes:{
          url:string;
        }
      }
    };
    BulletPoints: BulletPoints[];
  }


  
  interface FirstChild {
    children: SecondChild[];  // Recursively defined for nested children
    type: string;               // The type of the list item, e.g., "list-item"
  }

  type SecondChild = {
    text: string;
  }
  
  // Bullet Points structure
  export type BulletPoints = {
    format: string;             // Format of the list, e.g., "unordered"
    type: string;               // Type of the list, e.g., "list"
    children: FirstChild[];   // Array of list item children
  }
  