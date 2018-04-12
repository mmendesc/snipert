class CreateSnippets < ActiveRecord::Migration[5.1]
  def change
    create_table :snippets do |t|
      t.string :title
      t.text :markdown
      t.text :html_markdown
      t.string :language

      t.timestamps
    end
  end
end
