export function formatHTMLToText(text:string) {
    // Regular expression to match non-list HTML tags
    const nonListRegex = /<(?!(ul|ol|li)>)[^>]*>/g;
  
    // Replace non-list tags with newlines for basic formatting
    const formattedText = text.replace(nonListRegex, "\n");
  
    // Further processing for list tags (optional)
    // You can uncomment and modify this section to handle specific list formatting needs
  
    // Example: Add indentation for nested lists (replace with your desired logic)
    // let indentedText = formattedText.replace(/(?<=<\/li>)\n/g, "\t");
  
    return formattedText;
  }