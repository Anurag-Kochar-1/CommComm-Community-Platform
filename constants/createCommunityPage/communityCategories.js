

export const communityCategoriesArray = [
    {
        id: 0,
        value: "Choose Category",
        label: "Choose Category",
        subCategories: [
            { label: "choose", value: "choose", id: 0.1 }
        ]
    },
    {
        id: 1,
        value: "coding",
        label: "Coding",
        subCategories: [
            { label: "Web Development", value: "web-development", id: 1.1 }
        ]
    },
    {
        id: 2,
        value: "book-reading",
        label: "Book Reading",
        subCategories: [
            { label: "Fiction", value: "fiction", id: 2.1 }
        ]
    },
    {
        id: 3,
        value: "fitness",
        label: "Fitness",
        subCategories: [
            { label: "Fiction", value: "fiction", id: 3.1 }
        ]
    }, {
        id: 4,
        value: "gaming",
        label: "Gaming",
        subCategories: [
            { label: "Fiction", value: "fiction", id: 4.1 }
        ]
    }, {
        id: 5,
        value: "movies-and-shows",
        label: "Movies and Shows",
        subCategories: [
            { label: "Fiction", value: "fiction", id: 5.1 }
        ]
    },
]


export const communitySubCategoriesArray = [
    {
        id: 0.1,
        parentValue: "Choose Sub Category",
        parentLabel: "Choose Sub Category",
        subCategories: [
            { label: "Choose Sub Category", value: "Choose Sub Category", id: 0.11 },
        ]
    },

    {
        id: 0.2,
        parentValue: "coding",
        parentLabel: "Coding",
        subCategories: [
            { label: "Coding Sub Category", value: "Choose Sub Category", id: 0.101 },
            { label: "Web Development", value: "web-development", id: 1.1 },
            { label: "Mobile Development", value: "mobile-development", id: 1.2 },
            { label: "DSA", value: "dsa", id: 1.3 },
        ]
    },

    {
        id: 0.3,
        parentValue: "book-reading",
        parentLabel: "Book Reading",
        subCategories: [
            { label: "Book Reading Sub Category", value: "Choose Sub Category", id: 0.201 },
            { label: "Fiction", value: "fiction", id: 2.1 },
            { label: "Non Fiction", value: "non-fiction", id: 2.2 },
            { label: "Biography", value: "biography", id: 2.3 },
        ]
    },
    {
        id: 0.4,
        parentValue: "fitness",
        parentLabel: "Fitness",
        subCategories: [
            { label: "Fitness Sub Category", value: "Choose Sub Category", id: 0.301 },
            { label: "Fat loss", value: "fass-loss", id: 3.1 },
            { label: "Dieting", value: "dieting", id: 3.2 },
            { label: "Biography", value: "biography", id: 3.3 },
        ]
    },
    {
        id: 0.5,
        parentValue: "gaming",
        parentLabel: "Gaming",
        subCategories: [
            { label: "Gaming Sub Category", value: "Choose Sub Category", id: 0.401 },
            { label: "PC Gaming", value: "pc-gaming", id: 4.1 },
            { label: "Mobile Gaming", value: "mobile-gaming", id: 4.2 },
            { label: "Console Gaming", value: "console-gaming", id: 4.3 },
        ]
    },
    {
        id: 0.6,
        parentValue: "movies-and-shows",
        parentLabel: "Movies and Shows",
        subCategories: [
            { label: "Movies Sub Category", value: "Choose Sub Category", id: 0.601 },
            { label: "Netflix", value: "netflix", id: 6.1 },
            { label: "Bollwood", value: "bollwood", id: 6.2 },
            { label: "Hollywood", value: "hollywood", id: 6.3 },
        ]
    },
    

]