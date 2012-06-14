class CreateDocuments < ActiveRecord::Migration
  def up
    create_table :documents do |t|
      t.text :body
      t.string :title
      t.timestamps
    end
  end

  def down
    drop_table :documents
  end
end
