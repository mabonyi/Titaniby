#Add resources directory to the load path
resources_dir = Titanium.App.appURLToPath("app://index.html")
resources_dir=resources_dir.split("index.html")[0]
$LOAD_PATH << resources_dir+"/rb"

require 'redcloth'

# Take a block of text and translate it into Textilized HTML
def textilize(text)
  doc = RedCloth.new text
  writeToConsole(doc.to_html)
end