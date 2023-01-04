

export const communityCategoriesArray = [
    {
        id: 0,
        value:"Choose Category",
        label: "Choose Category",
        subCategories: [
            {label: "choose", value: "choose", id: 0.1 }
        ]
    },
    {
        id: 1,
        value:"coding",
        label: "Coding",
        subCategories: [
            {label: "Web Development", value: "web-development", id: 1.1 }
        ]
      },
      {
        id: 2,
        value:"book-reading",
        label: "Book Reading",
        subCategories: [
            {label: "Fiction", value: "fiction", id: 2.1 }
        ]
      }
]


export const communitySubCategoriesArray = [
    {
        id: 0.1,
        parentValue:"Choose Sub Category",
        parentLabel: "Choose Sub Category",
        subCategories: [
            {label: "Choose Sub Category", value: "choose Sub Category", id: 0.11 },
        ]
    },

    {
        id: 0.2,
        parentValue:"coding",
        parentLabel: "Coding",
        subCategories: [
            {label: "Coding Sub Category", value: "choose Sub Category", id: 0.101 },
            {label: "Web Development", value: "web-development", id: 1.1 },
            {label: "Mobile Development", value: "mobile-development", id: 1.2 },
            {label: "DSA", value: "dsa", id: 1.3 },
        ]
    },

    {
        id: 0.3,
        parentValue:"book-reading",
        parentLabel: "Book Reading",
        subCategories: [
            {label: "Book Reading Sub Category", value: "choose Sub Category", id: 0.201 },
            {label: "Fiction", value: "fiction", id: 2.1 },
            {label: "Non Fiction", value: "non-fiction", id: 2.2 },
            {label: "Biography", value: "biography", id: 2.3 },
        ]
    },
]