# WolfNet+

WolfNet+ is a browser extension that enhances the WolfNet experience by injecting modern CSS styles and providing additional functionality.

## Features

- **Modern CSS Styling**: Updates the look and feel of WolfNet with a modern design inspired by WolfKey.

### List of Changes
- **General**:
    - Better Design
    - Faster load speed
    - Changed background of site
    - Changed name of site to WolfNet (`siteInfo.js`)
    - Added favicon of site (`siteInfo.js`)
    - Changed font
- **Nav**:
    - Made subnav hide when scrolling (`scrollNav.js`). 
    - Made nav translucent. 
    - Changed logo in top left to one that doesn't have white background (`siteInfo.js`)
- **Progress Page**:
    - Remove teacher column in courses (`removeTeacher.js`)
    - Auto collapse sections such as Performence or Attendance Summary (`rearrangeProgress.js`)
    - Simplifies course names by removing unnecessary text (`changeCourseName.js`)
- **Assignment Detail**:
    - Put grade at the top of the assignment detail (`rearrangeAssignmentDetail.js`)
- **Assignment Center**:
    - Changed colouring of assignments. 
    - Added box shadow to graded assignments. 
- **Class Detail**:
    - Default to Sortable order for viewing assignments. 
    - Better roster view

## Installation

You can install it in the Chrome Web Store or Firefox Addons. 
To make custom modifications, you can load it as your own local extension as follows: 
1. Clone this repository:
   ```bash
   git clone https://github.com/hugoC1000/WolfNetPlus.git
2. Open your browser's extensions page:
For Chrome: Go to chrome://extensions/.
Enable "Developer mode."
Click "Load unpacked"  and select the project folder.

For Firefox: Go to about:debugging/
Go to This Firefox
Load Tempoary Addon and select the manifest.json

## FAQ
Q: Will this extension be avaliable for Safari? 
A: Apple Developer Program costs $99 USD a year. I do not see myself paying that in the future. 



## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.

## Contact
For questions or feedback, please contact [chunghugo99994@gmail.com].
