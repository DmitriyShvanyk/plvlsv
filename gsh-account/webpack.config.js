const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './src/js/main.js',
    highcharts: './src/js/modules/highcharts.js',
    highcharts_contacts_view: './src/js/modules/highcharts_contacts_view.js',
    highcharts_landing_stat: './src/js/modules/highcharts_landing_stat.js',
    guest: './src/js/guest.js',

    login: './src/js/login.js',

    dashboard: './src/js/dashboard.js',
    dashboard_pricing: './src/js/dashboard_pricing.js',
    dashboard_gift_codes: './src/js/dashboard_gift_codes.js',
    dashboard_earning: './src/js/dashboard_earning.js',
    dashboard_invites: './src/js/dashboard_invites.js',
    dashboard_downlines: './src/js/dashboard_downlines.js',
    dashboard_invites_user: './src/js/dashboard_invites_user.js',
    dashboard_settings: './src/js/dashboard_settings.js',

    activity: './src/js/activity.js',
    messages: './src/js/messages.js',
    messages_chat: './src/js/messages_chat.js',
    wallet: './src/js/wallet.js',
    navigator: './src/js/navigator.js',
    navigator_tasks: './src/js/navigator_tasks.js',
    contacts: './src/js/contacts.js',
    contacts_view: './src/js/contacts_view.js',
    contacts_add: './src/js/contacts_add.js',
    contacts_cards: './src/js/contacts_cards.js',
    team: './src/js/team.js',
    tasks: './src/js/tasks.js',
    knowledgebase: './src/js/knowledgebase.js',
    landing: './src/js/landing.js',
    landing_settings: './src/js/landing_settings.js',
    meetings: './src/js/meetings.js',
    events: './src/js/events.js',
    event: './src/js/event.js',
    schedule: './src/js/schedule.js',
    webinar_view: './src/js/webinar_view.js',
    awards: './src/js/awards.js',
    license: './src/js/license.js',
    profile: './src/js/profile.js',
    settings: './src/js/settings.js',
    support: './src/js/support.js',
    support_contact: './src/js/support_contact.js',
    pricing: './src/js/pricing.js',
    invitation: './src/js/invitation.js',
    micro_landing_template: './src/js/micro_landing_template.js',
    landing_form_template: './src/js/landing_form_template.js',
    base_landing_template: './src/js/base_landing_template.js',
    stats: './src/js/stats.js',
    pool_extra: './src/js/pool_extra.js',
    pool_regional: './src/js/pool_regional.js',
    pool_founders: './src/js/pool_founders.js',
    loyalty_card: './src/js/loyalty_card.js',
    structure: './src/js/structure.js',
    staking: './src/js/staking.js',    
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: (file) => {
                let path = file.split("src/")[1];
                return path
              }
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 95
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              }
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[ext]'
          }
        }
      }

    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    
    new MiniCssExtractPlugin({
      filename: devMode ? './css/[name].[contenthash].css' : './css/[name].[contenthash].css'
    }),

    // page invitation
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/invitation.html',
      filename: 'invitation.html',
      chunks: ['invitation']
    }),

    // page invitation 2
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/invitation2.html',
      filename: 'invitation2.html',
      chunks: ['invitation']
    }),

    // page micro landing template
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/micro_landing_template.html',
      filename: 'micro_landing_template.html',
      chunks: ['micro_landing_template']
    }),

    // page base landing template
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/base_landing_template.html',
      filename: 'base_landing_template.html',
      chunks: ['base_landing_template']
    }),

    // page form landing template
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/landing_form_template.html',
      filename: 'landing_form_template.html',
      chunks: ['landing_form_template']
    }),

    // page login
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/login.html',
      filename: 'login.html',
      chunks: ['login']
    }),

    // page register
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/register.html',
      filename: 'register.html',
      chunks: ['login']
    }),

    // page forgot
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/forgot.html',
      filename: 'forgot.html',
      chunks: ['login']
    }),

    // page forgot reset
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/forgot_reset.html',
      filename: 'forgot_reset.html',
      chunks: ['login']
    }),

    // page thanks
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/thanks.html',
      filename: 'thanks.html',
      chunks: ['login']
    }),

    // page dashboard 
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/dashboard.html',
      filename: 'dashboard.html',
      favicon: './src/favicon.ico',
      chunks: ['dashboard', 'main', 'highcharts']
    }),

    // page dashboard pricing
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/dashboard_pricing.html',
      filename: 'dashboard_pricing.html',
      favicon: './src/favicon.ico',
      chunks: ['dashboard_pricing', 'main']
    }),

    // page dashboard gift codes
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/dashboard_gift_codes.html',
      filename: 'dashboard_gift_codes.html',
      favicon: './src/favicon.ico',
      chunks: ['dashboard_gift_codes', 'main']
    }),

    // page dashboard earning
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/dashboard_earning.html',
      filename: 'dashboard_earning.html',
      favicon: './src/favicon.ico',
      chunks: ['dashboard_earning', 'main']
    }),

    // page dashboard invites
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/dashboard_invites.html',
      filename: 'dashboard_invites.html',
      favicon: './src/favicon.ico',
      chunks: ['dashboard_invites', 'main']
    }),

    // page dashboard downlines
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/dashboard_downlines.html',
      filename: 'dashboard_downlines.html',
      favicon: './src/favicon.ico',
      chunks: ['dashboard_downlines', 'main']
    }),

    // page dashboard invites user
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/dashboard_invites_user.html',
      filename: 'dashboard_invites_user.html',
      favicon: './src/favicon.ico',
      chunks: ['dashboard_invites_user', 'main']
    }),

    // page dashboard settings
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/dashboard_settings.html',
      filename: 'dashboard_settings.html',
      favicon: './src/favicon.ico',
      chunks: ['dashboard_settings', 'main']
    }),    

    // page activity 
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/activity.html',
      filename: 'activity.html',
      chunks: ['activity', 'main']
    }),

    // page messages
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/messages.html',
      filename: 'messages.html',
      chunks: ['messages', 'main']
    }),

    // page messages chat 
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/messages_chat.html',
      filename: 'messages_chat.html',
      chunks: ['messages_chat', 'main']
    }),

    // page wallet
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/wallet.html',
      filename: 'wallet.html',
      chunks: ['wallet', 'main']
    }),

    // page navigator 
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/navigator.html',
      filename: 'navigator.html',
      chunks: ['navigator', 'main']
    }),

    // page navigator tasks 
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/navigator_tasks.html',
      filename: 'navigator_tasks.html',
      chunks: ['navigator_tasks', 'main']
    }),

    // page contacts 
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/contacts.html',
      filename: 'contacts.html',
      chunks: ['contacts', 'main']
    }),

    // page contacts view
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/contacts_view.html',
      filename: 'contacts_view.html',
      chunks: ['contacts_view', 'main', 'highcharts_contacts_view']
    }),

    // page contacts add
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/contacts_add.html',
      filename: 'contacts_add.html',
      chunks: ['contacts_add', 'main']
    }),

    // page contacts cards
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/contacts_cards.html',
      filename: 'contacts_cards.html',
      chunks: ['contacts_cards', 'main']
    }),

    // page contacts view other
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/contacts_view_other.html',
      filename: 'contacts_view_other.html',
      chunks: ['contacts_view', 'main', 'highcharts_contacts_view']
    }),

    // page contacts view guest
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/contacts_view_guest.html',
      filename: 'contacts_view_guest.html',
      chunks: ['contacts_view', 'main', 'highcharts_contacts_view', 'guest']
    }),

    // page team
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/team.html',
      filename: 'team.html',
      chunks: ['team', 'main']
    }),

    // page tasks
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/tasks.html',
      filename: 'tasks.html',
      chunks: ['tasks', 'main']
    }),

    // page knowledgebase
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/knowledgebase.html',
      filename: 'knowledgebase.html',
      chunks: ['knowledgebase', 'main']
    }),

    // page knowledgebase category
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/knowledgebase_category.html',
      filename: 'knowledgebase_category.html',
      chunks: ['knowledgebase', 'main']
    }),

    // page knowledgebase category article
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/knowledgebase_category_article.html',
      filename: 'knowledgebase_category_article.html',
      chunks: ['knowledgebase', 'main']
    }),

    // page knowledgebase guest
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/knowledgebase_guest.html',
      filename: 'knowledgebase_guest.html',
      chunks: ['knowledgebase', 'main', 'guest']
    }),

    // page knowledgebase category guest
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/knowledgebase_category_guest.html',
      filename: 'knowledgebase_category_guest.html',
      chunks: ['knowledgebase', 'main', 'guest']
    }),

    // page knowledgebase category article guest
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/knowledgebase_category_article_guest.html',
      filename: 'knowledgebase_category_article_guest.html',
      chunks: ['knowledgebase', 'main', 'guest']
    }),

    // page landing
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/landing.html',
      filename: 'landing.html',
      chunks: ['landing', 'main']
    }),

    // page landing stats
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/landing_stats.html',
      filename: 'landing_stats.html',
      chunks: ['landing', 'main', 'highcharts_landing_stat']
    }),

    // page landing settings
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/landing_settings.html',
      filename: 'landing_settings.html',
      chunks: ['landing_settings', 'main']
    }),

    // page meetings
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/meetings.html',
      filename: 'meetings.html',
      chunks: ['meetings', 'main']
    }),

    // page events
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/events.html',
      filename: 'events.html',
      chunks: ['events', 'main']
    }),

    // page event
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/event.html',
      filename: 'event.html',
      chunks: ['event', 'main']
    }),

    // page events guest
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/events_guest.html',
      filename: 'events_guest.html',
      chunks: ['events', 'main', 'guest']
    }),

    // page event guest
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/event_guest.html',
      filename: 'event_guest.html',
      chunks: ['event', 'main', 'guest']
    }),

    // page schedule
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/schedule.html',
      filename: 'schedule.html',
      chunks: ['schedule', 'main', 'guest']
    }),    
    
    // page webinar_view
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/webinar_view.html',
      filename: 'webinar_view.html',
      chunks: ['webinar_view', 'main', 'guest']
    }),    

    // page awards
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/awards.html',
      filename: 'awards.html',
      chunks: ['awards', 'main']
    }),

    // page profile
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/profile.html',
      filename: 'profile.html',
      chunks: ['profile', 'main']
    }),

    // page settings
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/settings.html',
      filename: 'settings.html',
      chunks: ['settings', 'main']
    }),

    // page support
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/support.html',
      filename: 'support.html',
      chunks: ['support', 'main']
    }),

    // page support contact
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/support_contact.html',
      filename: 'support_contact.html',
      chunks: ['support_contact', 'main']
    }),

    // page pricing
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pricing.html',
      filename: 'pricing.html',
      chunks: ['pricing', 'main']
    }),

    // page stats
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/stats.html',
      filename: 'stats.html',
      chunks: ['stats', 'main']
    }),


    // pool extra
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pool_extra.html',
      filename: 'pool_extra.html',
      favicon: './src/favicon.ico',
      chunks: ['pool_extra', 'main']
    }),

    // pool regional
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pool_regional.html',
      filename: 'pool_regional.html',
      favicon: './src/favicon.ico',
      chunks: ['pool_regional', 'main']
    }),

    // Pool Founders
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pool_founders.html',
      filename: 'pool_founders.html',
      favicon: './src/favicon.ico',
      chunks: ['pool_founders', 'main']
    }),

    // loyalty card
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/loyalty_card.html',
      filename: 'loyalty_card.html',
      favicon: './src/favicon.ico',
      chunks: ['loyalty_card', 'main']
    }),

    // page license
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/license.html',
      filename: 'license.html',
      chunks: ['license', 'main']
    }),

    // page structure
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/structure.html',
      filename: 'structure.html',
      chunks: ['structure']
    }),

    // page staking
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/staking.html',
      filename: 'staking.html',
      chunks: ['staking', 'main']
    }),


    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default']
      },
      canPrint: true
    }),
  ]
};