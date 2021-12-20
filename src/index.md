---
# Feel free to add content and custom Front Matter to this file.

layout: home
---

<div>
  <div id="home" class="h-screen flex justify-center items-center">
        <img src="images/logo.png" alt="Hummus on Rails">
    </div>
    <div class="grid grid-cols-2 gap-4">
        <div id="first-grid newsletter">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Hummus on Rails</span>
                <span class="block text-red-800 xl:inline">in your mailbox</span>
            </h1>
            <div id="revue-embed">
                <form action="https://www.getrevue.co/profile/hummusonrails/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                    <div class="revue-form-group">
                        <input class="revue-form-field w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Your email address..." type="email" name="member[email]" id="member_email">
                    </div>
                    <div class="revue-form-group">
                        <input class="revue-form-field w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name">
                    </div>
                    <div class="revue-form-group">
                        <input class="revue-form-field w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name">
                    </div>
                    <div class="revue-form-actions">
                        <input class="w-full py-4 bg-red-800 hover:bg-red-900 rounded text-sm font-bold text-gray-50 transition duration-200" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
                    </div>
                </form>
            </div>
        </div>
        <div id="second-grid social">
            <div class="grid grid-cols-3 gap-1">
                <div id="first-social-row">
                    <a href="https://www.reddit.com/r/hummusonrails/">
                        <img src="images/social/reddit.png">
                    </a>
                    <a href="https://www.twitch.tv/hummusonrails">
                        <img src="images/social/twitch.png">
                    </a>
                </div>
                <div id="second-social-row">
                    <a href="https://www.instagram.com/hummusonrails/">
                        <img src="images/social/instagram.png">
                    </a>
                    <a href="https://www.linkedin.com/in/rabbigreenberg/">
                        <img src="images/social/linkedin.png">
                    </a>
                </div>
                <div id="third-social-row">
                    <a href="https://twitter.com/RabbiGreenberg">                    
                        <img src="images/social/twitter.png">
                    </a>
                    <a href="https://dev.to/bengreenberg">
                        <img src="images/social/dev.png">
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center w-screen"  id="archives-link">
            <div>
                <a class="place-content-center" href="https://www.getrevue.co/profile/hummusonrails">
                    <p class="text-red-800 text-5xl font-bold">Past Issues</p>
                </a>
        </div>
    </div>
</div>
