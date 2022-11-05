import AirtableIcon from "../../icons/Airtable.svg";
import MondayIcon from "../../icons/monday.com.png";

const icons = {
  airtable: AirtableIcon,
  "monday.com": MondayIcon
};

export default [
  {
    id: "1",
    type: "input",
    data: {
      label: "Input"
    },
    position: { x: 200, y: 0 }
  },
  {
    id: "2",
    type: "app",
    data: {
      label: "Create Item",
      name: "airtable",
      icon: icons.airtable
    },
    position: { x: 100, y: 100 }
  },
  {
    id: "3",
    type: "app",
    data: {
      label: "Find Item",
      name: "monday.com",
      icon: icons["monday.com"]
    },
    position: { x: 400, y: 100 }
  },

  { id: "e1-2", source: "1", target: "2", animated: true, type: "custom" },
  { id: "e1-3", source: "1", target: "3", animated: true, type: "custom" }
];
