const organizationTree = {
    name: "CEO",
    children: [
      {
        name: "CFO",
        children: [
          {
            name: "Finance Manager",
            children: [
              { name: "Senior Accountant" },
              { name: "Junior Accountant" },
            ],
          },
          {
            name: "Investment Manager",
            children: [
              { name: "Financial Analyst I" },
              { name: "Financial Analyst II" },
            ],
          },
        ],
      },
      {
        name: "CTO",
        children: [
          {
            name: "Engineering Manager",
            children: [
              { name: "Lead Developer" },
              { name: "Senior Developer" },
              { name: "Junior Developer" },
            ],
          },
          {
            name: "QA Manager",
            children: [
              { name: "Lead QA Engineer" },
              { name: "QA Engineer I" },
              { name: "QA Engineer II" },
            ],
          },
        ],
      },
      {
        name: "COO",
        children: [
          {
            name: "Operations Manager",
            children: [{ name: "HR Manager" }, { name: "Office Coordinator" }],
          },
          {
            name: "Customer Relations Manager",
            children: [
              { name: "Customer Support Specialist I" },
              { name: "Customer Support Specialist II" },
            ],
          },
        ],
      },
    ],
  };
  

function flattenOrganizationTree(tree) {
    let flatList = [];
    let currentId = 1;
  
    function traverse(node, parentId, position) {
      const newNode = {
        id: currentId++,
        name: node.name,
        position: position ? `${node.name} > ${position}` : node.name,
        parentId: parentId,
      };
  
      flatList.push(newNode);
  
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) =>
          traverse(child, newNode.id, newNode.position)
        );
      }
    }
  
    traverse(tree, null, "");
  
    return flatList;
  }
  
  
  const flatList = flattenOrganizationTree(organizationTree);
  console.log(flatList);
  