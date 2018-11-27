# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   
    User.create(
        [{ name: 'User1', email: "validaddress1@gmail.com"},
        { name: 'User1', email: "validaddress1@gmail.com"},
        { name: 'User2', email: "validaddress2@gmail.com"},
        { name: 'User3', email: "validaddress3@gmail.com"},
        { name: 'User4', email: "validaddress4@gmail.com"},
        { name: 'User5', email: "validaddress5@gmail.com"},
        { name: 'User6', email: "validaddress6@gmail.com"},
        { name: 'User7', email: "validaddress7@gmail.com"},])

    Book.create([
        { title: 'Book1', description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.", user_id: 5},
        { title: 'Book2', description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.", user_id: 6},
        { title: 'Book3', description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.", user_id: 4},
        { title: 'Book4', description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.", user_id: 3},
        { title: 'Book5', description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.", user_id: 3},
        { title: 'Book6', description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.", user_id: 8},
        { title: 'Book7', description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.", user_id: 7},
    ])
