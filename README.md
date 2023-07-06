# Google Shopping Clone Project

This is an example Rails project that implements a clone of Google Shopping using Stimulus and Tailwind CSS.

## Environment Setup

Make sure you have Ruby, Rails, and Node.js installed on your machine.

Clone the repository:

```
$ git clone https://github.com/your-username/google-shopping-project.git
$ cd google-shopping-project
```

## Install the dependencies:

```
$ bundle install
$ yarn install
```

# Create and migrate the database:

```
$ rails db:create
$ rails db:migrate
```

## Implementation

In this project, we will use Rails to create the application skeleton and Tailwind CSS for styling. Stimulus will be used to add interactivity to the page elements.

### Step 1: Controller Creation

Create a controller called `Products` to handle product-related operations:

```ruby
$ rails generate controller Products index show
```

##Step 2: Route Configuration
Open the `config/routes.rb` file and add the following routes:

```
Rails.application.routes.draw do
  root 'products#index'
  resources :products, only: [:index, :show]
end
```

##Step 3: Running the Server
Start the Rails server:
```
bin/dev
```

Open your web browser and visit `http://localhost:3000` to see the Google Shopping clone in action.
Make sure to follow the necessary steps for installing the required gems and packages before running the Rails server.


