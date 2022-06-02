const siteData = [
    {
        type: 'application',
        name: 'Zoho CRM',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35035ce0a0fa7f6263c_61908ce7da35c7c5b9d4539b_Zoho_Logo__1_.png',
        tag: ''
    },
    {
        type: 'application',
        name: 'Linkedin Company Pages',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a352514f507747290198_61908cdbd993101f7c0dc258_linkedinlogo1.png',
        tag: 'new'
    },
    {
        type: 'application',
        name: 'ADP Workforce Now',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3545227a18a1d98a920_61908ccf3462012d7c9e98a2_Employer-5-ADP-WFN-p-800.png',
        tag: 'new'
    },
    {
        type: 'application',
        name: 'Zendesk Sell',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35469a98a6b9e3a16b9_61908cd2e6b7ae88e1e14c58_Zendesk_Sell_Logo.png',
        tag: 'new'
    },
    {
        type: 'application',
        name: 'Typeform',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35394e4107096e8fcdb_61908cd4a0ab577fb603bde1_Typeform_logo.png',
        tag: ''
    },
    {
        type: 'application',
        name: 'Workday HCM',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35569a98a41783a16bd_61908ccdf6ec9077d00e3b77_Workday_HCM-p-800.jpeg'
    },
    {
        type: 'application',
        name: 'Branch',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a39669a98a3edb3a16ee_6132944dc344e0351ab1104d_branch-logo.png'
    },
    {
        type: 'application',
        name: 'PowerSchool',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a397e44b94568be306d7_613294483cf2c317ed5dc755_PowerSchool.svg'
    },
    {
        type: 'application',
        name: 'Ellucian Banner',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3985227a16e6898af6e_613294449b14d067c72d72cd_ellucian-p-500.png'
    },
    {
        type: 'application',
        name: 'Blackboard',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a398d187500e177ccc22_613294462800342338d81715_Blackboard.svg'
    },
    {
        type: 'application',
        name: 'Oracle Siebel CRM',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/62705886fe953b5728c33499_Oracle_logo.svg'
    },
    {
        type: 'application',
        name: 'Oracle PeopleSoft',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/62705886fe953b5728c33499_Oracle_logo.svg'
    },
    {
        type: 'application',
        name: 'Canvas',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a39b69a98a344b3a16f3_6132943f9da76fb1303d9121_Canvas_Learning.svg'
    },
    {
        type: 'application',
        name: 'Epicor Prophet 21',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a39baaba4d07a4d3d602_6132943dd02abd137badf80e_Epicor.svg'
    },
    {
        type: 'application',
        name: 'Instagram Ads',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a39bea41ef6fe5534aef_6132943919b75f088c9a2ba1_Instagram.svg'
    },
    {
        type: 'application',
        name: 'Instagram Business',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a39bea41ef6fe5534aef_6132943919b75f088c9a2ba1_Instagram.svg'
    },
    {
        type: 'application',
        name: 'Twitter Analytics',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3618fa52f2567899d5e_6132943786028b266be3d6fb_Property_1_Twitter.svg'
    },
    {
        type: 'application',
        name: 'SugarCRM',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a39d742553bc8643ce4c_6132943682554bda3b158d48_sugarcrm-logo-p-500.png'
    },
    {
        type: 'application',
        name: 'Delighted',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a39e42545ad9f4ca7cbd_61329434b61710e7304c7ef8_Delighted.svg'
    },
    {
        type: 'application',
        name: 'Zendesk Sunshine',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a39e07813859ca19b717_61329432f6ef3f88a0da6947_Zendesk_Sunshine.svg'
    },
    {
        type: 'application',
        name: 'TikTok Ads',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3b242545a2339ca7d18_613293e44b899053016ce25a_tiktok-icon2.png'
    },
    {
        type: 'application',
        name: 'SAP Business ByDesign',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6217d32e891d5c3838e881ce_SAP%20Business%20ByDesign.jpeg'
    },
    {
        type: 'application',
        name: 'Google Analytics 4',
        tag: 'new',
        image: ''
    },
    {
        type: 'application',
        name: 'Amazon Ads',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/624b58fdbd4b9efc2fb6bcf8_Logo_AmazonAds-p-500.png'
    },
    {
        type: 'application',
        name: 'Medallia',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/626041a261a4f93e0499c150_medallia_icon.png'
    },
    {
        type: 'application',
        name: 'Oracle Fusion Cloud Applications — ERP',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/627c32dc6ee1e61fcc5ca662_oracle_fusion_logo.png'
    },
    {
        type: 'application',
        name: 'Oracle Fusion Cloud Applications — SCM',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/627c32dc6ee1e61fcc5ca662_oracle_fusion_logo.png'
    },
    {
        type: 'application',
        name: 'Oracle Fusion Cloud Applications — HCM',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/627c32dc6ee1e61fcc5ca662_oracle_fusion_logo.png'
    },
    {
        type: 'application',
        name: 'Oracle Fusion Cloud Applications — CX',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/627c32dc6ee1e61fcc5ca662_oracle_fusion_logo.png'
    },
    {
        type: 'application',
        name: 'Adjust',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/62730105cc656c127a73758d_Screen%20Shot%202022-05-03%20at%2011.19.28%20AM.png'
    },
    {
        type: 'application',
        name: 'Google Analytics 4 Export',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/627302020aa96198252869c5_Screen%20Shot%202022-05-03%20at%209.47.48%20AM.png'
    },
    {
        type: 'application',
        name: 'FinancialForce',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6286b3186ff2c512f3f2374d_ff-logo.png'
    },
    {
        type: 'application',
        name: 'nCino',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6286b5b1ebb7445a9f0b3a97_nCino_Logo_color-Light_bg.svg'
    },
    {
        type: 'application',
        name: 'Veeva',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6286b630b020bd51503c63f4_veeva.svg'
    },
    {
        type: 'application',
        name: 'Height',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a355ea80051d955e0067_6132953682554b544916305f_connector_height.png'
    },
    {
        type: 'application',
        name: 'Microsoft Azure SQL Database',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3565227a18edd98a924_61329534e65d0454014e96bc_connector_microsoft-azure-sql-database-symbol.svg'
    },
    {
        type: 'application',
        name: 'Atlassian Jira',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a357767c351762992ec0_61329532b15fc876588f5686_AtlassianJira.svg'
    },
    {
        type: 'application',
        name: 'FTPS',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3581b4f741304a39136_6132952f2399362ea4cf9d6e_FTPS.svg'
    },
    {
        type: 'application',
        name: 'Intercom',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a358ea41ef29215348ea_6132952d19c808dfca774120_Intercom.svg'
    },
    {
        type: 'application',
        name: 'Oracle EBS',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3599bb61673cbac3fe5_6132952cf0922ce03f9416d3_connector_oracle-ebs.png'
    },
    {
        type: 'application',
        name: 'Outbrain',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35a6b17bdc7c08d420c_61329528c91ba000dc4de966_Outbrain.svg'
    },
    {
        type: 'application',
        name: 'SAP ERP (S/4 HANA)',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35aaaba4d0228d3d5e8_61912ee5928cce508e917991_S4_HANA_Logo-p-800.jpeg'
    },
    {
        type: 'application',
        name: 'Oracle RAC',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/627056650238264bab07986e_oracle_database_logo-p-500.png'
    },
    {
        type: 'application',
        name: 'Amplitude',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35b94e41074bfe8fcdf_613295266f4862dcbcb54e18_connector_amplitude-symbol.svg'
    },
    {
        type: 'application',
        name: 'Google Cloud Function',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35c06154e96593acd76_61329523e65d04cafd4e8d3f_connector_google-cloud-functions-symbol.svg'
    },
    {
        type: 'application',
        name: 'Twilio',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35c35ce0aa064f62738_61329521828adb77f0f9d306_connector_twilio-logo-red-p-500.png'
    },
    {
        type: 'application',
        name: 'Mavenlink',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35c94e4105667e8fce6_6132951f0ff42b639688c940_Mavenlink.svg'
    },
    {
        type: 'application',
        name: 'Apple Search Ads',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35e8fa52f962b899d59_61329519ef74f631c6a736fb_Apple.svg'
    },
    {
        type: 'application',
        name: 'MySQL on RDS',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35e6b17bdfedd8d423d_61329043fa58a9e828900b94_partner_mysql-amazon-rds-warehouse-symbol.svg'
    },
    {
        type: 'application',
        name: 'Sailthru',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35fd6736d4e81c7a034_613295120f70cb5a23502197_Sailthru.svg'
    },
    {
        type: 'application',
        name: 'Braintree Payments',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a360742553643443cd6c_6132950f2d4a3d536d7e4913_Braintree.svg'
    },
    {
        type: 'application',
        name: 'ReCharge',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3611bfe917b6f68ff29_6132950b86b2c26bbc05be90_Recharge.svg'
    },
    {
        type: 'application',
        name: 'Twitter Ads',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3618fa52f2567899d5e_6132943786028b266be3d6fb_Property_1_Twitter.svg'
    },
    {
        type: 'application',
        name: 'Splunk',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3628fa52fa08d899d62_61329506e9987b083695fe47_connector_splunk-symbol.svg'
    },
    {
        type: 'database',
        name: 'MySQL on Google Cloud SQL',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a362e44b946822e3067d_613295089506d6ba78bb16d4_connector_google-cloud-mysql-database-symbol.svg'
    },
    {
        type: 'database',
        name: 'PostgreSQL on Google Cloud',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3623deebb7683dd3281_61329049fc71a10c6185288a_partner_google-cloud-postgresql-symbol.svg'
    },
    {
        type: 'application',
        name: 'Linkedin Ads',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3637dd18bc0b5f7b1d5_613295028bc3899ccb310280_LinkedIn.svg'
    },
    {
        type: 'database',
        name: 'MongoDB Sharded',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a364130a2b74bc386d69_613294ff6e81b809e8c81574_MongoDB_sharded.svg'
    },
    {
        type: 'database',
        name: 'MariaDB',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Google Play',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Pinterest Ads',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Mixpanel',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Google Drive',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Apple App Store (formerly iTunes Connect)',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Zuora',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Kustomer',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'AppsFlyer',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Marketo',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Iterable',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Greenhouse',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Google Search Console',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'MySQL on Azure Database',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'SQL Server on RDS',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a36bd6736d5e9bc7a03f_6132945093467740416633a9_sql-server-amazon-rds-symbol.svg'
    },
    {
        type: 'event',
        name: 'Segment',
        tag: '',
        image: ''
    },
    {
        type: 'file',
        name: 'SFTP',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Campaign Manager',
        tag: '',
        image: ''
    },
    {
        type: 'database',
        name: 'MariaDB on Azure Database',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Qualtrics (previously SAP Qualtrics)',
        tag: '',
        image: ''
    },
    {
        type: 'file',
        name: 'Microsoft Azure Blob Storage',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Coupa',
        tag: '',
        image: ''
    },
    {
        type: 'event',
        name: 'Webhooks',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Lightspeed',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Lever',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'SurveyMonkey',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Shopify',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'front',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Asana',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'SAP Concur',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Apache Kafka',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Optimizely',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Snowplow Analytics',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'PostgreSQL on RDS',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Salesforce Pardot',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Help Scout',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Github',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Quickbooks',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Criteo',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Adobe Analytics (Omniture)',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a379e44b94767ae306cb_6132941a48f473f43831c604_Adobe.svg'
    },
    {
        type: 'application',
        name: 'Facebook Page Insights',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a37a4627805acdd00fcf_613294a9ab22a80bf780d071_connector_facebook-pages-symbol.svg'
    },
    {
        type: 'application',
        name: 'YouTube Analytics',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a37aa46a3118ac0c5815_613294ab09a5f5d333e12622_YouTube.svg'
    },
    {
        type: 'application',
        name: 'Marin Software',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a37b5227a18bbf98ae22_613294a7a224b456448201a0_MarinSoftward.svg'
    },
    {
        type: 'application',
        name: 'Pendo',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a37c3deebbde04dd340e_613294a3e04a3605cdffe436_Pendo.svg'
    },
    {
        type: 'application',
        name: 'Sage Intacct',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a37d42545a60f8ca7ac2_6132949f9737b14cc8827adf_Sage_Intacct.svg'
    },
    {
        type: 'application',
        name: 'Snapchat Ads',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a37d69a98ab45d3a16cb_613294a1e9987bb07195c6bd_Snapchat.svg'
    },
    {
        type: 'application',
        name: 'Recurly',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a37e767c35d5a4992ecf_6132949de04a36188affe245_Recurly.svg'
    },
    {
        type: 'application',
        name: 'Braze',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a37e3a8d5a3e0f06bdf1_6132949b748749b84305bfe7_connector_braze-symbol.svg'
    },
    {
        type: 'application',
        name: 'PostgreSQL on Azure Database',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3803dee3b62066d1ae3_6132949a7d14b1efc2ca6aed_connector_microsoft-azure-postgres-symbol.svg'
    },
    {
        type: 'application',
        name: 'Freshdesk',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38146278019cbd00fe2_61329498d6966e0b1eb05513_Freshdesk.svg'
    },
    {
        type: 'application',
        name: 'square',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38142545a4861ca7ae8_61329494dad7eb465a952595_Square.svg'
    },
    {
        type: 'file',
        name: 'CSV Browser Upload',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a383ae6b84b58a529f72_613294900ea81bb0ebef80b1_CSV.svg'
    },
    {
        type: 'file',
        name: 'Email Ingestor',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38465c3fd22e0ae6e41_6132948e0ff42ba00788754d_connector_email-ingestor-symbol.svg'
    },
    {
        type: 'database',
        name: 'Heroku Postgres',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38478c8b347fed5e7a4_61329460ae6f40c5896e23c6_Heroku.svg'
    },
    {
        type: 'application',
        name: 'Sendgrid',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3857528a13165b3d4ac_6132948a8413b6165aa5f68d_Sendgrid.svg'
    },
    {
        type: 'application',
        name: 'Microsoft Dynamics 365',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38663e9d8a388a48845_6132948724b0d30478e8e348_connector_microsoft-dynamics-365-symbol.svg'
    },
    {
        type: 'file',
        name: 'FTP',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3867528a1cf6eb3d4b0_613294899f4e9e5c678de937_FTP.svg'
    },
    {
        type: 'application',
        name: 'Microsoft Advertising',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a386aac6b0cf003497b2_6132903bfa106fa84beb6226_connector_bing-ads-symbol.svg'
    },
    {
        type: 'application',
        name: 'Workday',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/61ba31293b836c7a07f9cd24_workday.png'
    },
    {
        type: 'application',
        name: 'Mandrill',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38844ab4750aa9c9940_613294810ff42bca4c886cbf_connector_mandrill-symbol.svg'
    },
    {
        type: 'application',
        name: 'ServiceNow',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38835ce0a81e2f6293f_6132947fa18a0b742c222271_connector_servicenow-symbol-p-800.jpeg'
    },
    {
        type: 'file',
        name: 'Google Cloud Storage',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38a3fb9e77b59eb9e6d_6132947a19b75f6afb9a41ee_GoogleCloud.svg'
    },
    {
        type: 'application',
        name: 'Anaplan',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a389767c35c459992ed8_6132947c6b064d944b5299b3_Anaplan.svg'
    },
    {
        type: 'application',
        name: 'UserVoice',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38c38f8db11a75b6891_613294782d4a3d87f47e0a01_UserVoice.svg'
    },
    {
        type: 'application',
        name: 'AdRoll',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38c3deebb396add3540_6132947324b0d33a92e8d7b2_AdRoll.svg'
    },
    {
        type: 'application',
        name: 'Oracle Eloqua',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38cf3028a2f481e6255_61329475faad7400c515ba7d_eloqua.svg'
    },
    {
        type: 'application',
        name: 'Klaviyo',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38da46a3190230c581a_61329471b6171032734c9815_Klavio.svg'
    },
    {
        type: 'application',
        name: 'Xero',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38e462780be73d00ffe_6132946a919da22ace1d7f3f_Xero.svg'
    },
    {
        type: 'application',
        name: 'Airtable',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38eae6b84af5c529fb4_6132946ce65d04d3de4e4905_Airtable.svg'
    },
    {
        type: 'application',
        name: 'Box',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38dea800502cd5e02ec_6132946ff7be1e91dd880636_connector_box-p-500.png'
    },
    {
        type: 'application',
        name: 'Azure Cloud Functions',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38fcc609454c8e9af91_613294668b0c5412ea844d37_connector_microsoft-azure-functions-symbol.svg'
    },
    {
        type: 'file',
        name: 'Dropbox',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38fea41ef6cef534a70_61329469eab2798a4cc27d7e_Dropbox.svg'
    },
    {
        type: 'application',
        name: 'MongoDB',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3901b4f74718ba3916a_613294646e81b85ff5c7a1ef_MongoDB.svg'
    },
    {
        type: 'application',
        name: 'Stripe',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a390ea80052bb25e02fa_613294634822a07a3789f6a4_Stripe.svg'
    },
    {
        type: 'event',
        name: 'Apache Kafka on Heroku',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a38478c8b347fed5e7a4_61329460ae6f40c5896e23c6_Heroku.svg'
    },
    {
        type: 'application',
        name: 'Google Analytics 360',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3918fa52f4159899d7d_6132945e748749eceb05ab5f_connector_google-analytics-360-symbol.svg'
    },
    {
        type: 'application',
        name: 'Magento via MySQL',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3921bfe9158a76901bc_6132945c81479649a53f55e1_connector_magento-mysql-symbol.svg'
    },
    {
        type: 'application',
        name: 'Pipedrive',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a39f9bb616ccd7ac424c_6132942f5e4766de0f4c57b2_connector_Pipedrive_Logo.svg'
    },
    {
        type: 'application',
        name: 'Google Analytics',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a39f35ce0a0882f62aea_6132942d86b2c27223053494_connector_google-analytics-symbol.svg'
    },
    {
        type: 'application',
        name: 'Facebook Ads Account',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a07dd18b4e86f7b1e1_613294219b14d081782d5b50_Property_1_facebook.svg'
    },
    {
        type: 'application',
        name: 'Salesforce Marketing Cloud',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a17129c8261d850c17_61912ee7e6b7aeff9e1b4315_Sf-marketingcloud-logo.png'
    },
    {
        type: 'application',
        name: 'Facebook',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a07dd18b4e86f7b1e1_613294219b14d081782d5b50_Property_1_facebook.svg'
    },
    {
        type: 'application',
        name: 'Zendesk',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a163e9d806b1a4885e_6132942573573c81a2ae6c6a_Zendesk.svg'
    },
    {
        type: 'application',
        name: 'Yahoo Gemini (Verizon Media)',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a3462780394dd01036_6132941f86b2c2cae605262d_Verizon_Media.svg'
    },
    {
        type: 'application',
        name: 'Facebook Ads Insights',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a07dd18b4e86f7b1e1_613294219b14d081782d5b50_Property_1_facebook.svg'
    },
    {
        type: 'application',
        name: 'WooCommerce',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a4078138989419b71d_6132940a919da2bbde1d3cb5_WooCommerce.svg'
    },
    {
        type: 'application',
        name: 'Zendesk Chat',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a435ce0a3723f62b00_6132941d3bd898547e455e67_Zendesk_Chat.svg'
    },
    {
        type: 'application',
        name: 'PrestaShop',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a51a99123c3cc63b42_6132903081484f504121f08a_PrestaShop_PNG.png'
    },
    {
        type: 'application',
        name: 'Adobe',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a379e44b94767ae306cb_6132941a48f473f43831c604_Adobe.svg'
    },
    {
        type: 'application',
        name: 'Heap',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a6130a2bc939386dd7_61329415b8a83779d190a49f_Heap.svg'
    },
    {
        type: 'application',
        name: 'Spree Commerce via MySQL',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a63dee3b27b86d1d79_61329413f0922c15859340d2_connector_spree-commerce-via-mysql-symbol.svg'
    },
    {
        type: 'application',
        name: 'Microsoft Dynamics AX',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a794fbe7fe454fd166_613294116e4ba6104af54512_connector_dynamics-ax-p-500.png'
    },
    {
        type: 'application',
        name: 'OsCommerce via MySQL',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a7ea800500bf5e0302_613294104b8990e3f26d0a0f_oscommerce.svg'
    },
    {
        type: 'application',
        name: 'Microsoft Dynamics GP',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a85227a114c398afc2_6132940eab22a8dd43804087_connector_mdgp.png'
    },
    {
        type: 'application',
        name: 'Loaded Commerce via MySQL',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a8f3028a4fa11e625b_6132940cc78755509e8db027_connector_loaded-commerce-via-mysql-symbol.svg'
    },
    {
        type: 'application',
        name: 'WooCommerce via MySQL',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a4078138989419b71d_6132940a919da2bbde1d3cb5_WooCommerce.svg'
    },
    {
        type: 'application',
        name: 'PrestaShop via MySQL',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a51a99123c3cc63b42_6132903081484f504121f08a_PrestaShop_PNG.png'
    },
    {
        type: 'application',
        name: 'Microsoft Dynamics CRM',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3a96b17bd47c38d4722_61329408dad7ebea9294d9fd_connector_Microsoft-Dynamics-CRM-logo.png'
    },
    {
        type: 'application',
        name: 'Google Ad Manager',
        tag: '',
        image: ''
    },
    {
        type: 'application',
        name: 'Microsoft Dynamics NAV',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3aa42545a0a26ca7ceb_6132940286028b0634e3c21f_connector_Microsoft-Dynamics-NAV-Logo-2015.png'
    },
    {
        type: 'application',
        name: 'AWS Config',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3ab1bfe911bf4690294_6132940082554b77ea1564d8_connector_AWS_config_color.svg'
    },
    {
        type: 'application',
        name: 'AWS Asset Inventory',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3ab94fbe713b84fd16a_613293fef0922c42a29326cd_connector_AWS_Asset_Inventory_Color.svg'
    },
    {
        type: 'application',
        name: 'Google Sheets',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3ac742553d7b943ce5a_613293faae21bd49b5edbe3b_GoogleSheets.svg'
    },
    {
        type: 'database',
        name: 'PostgreSQL Database',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3aeaac6b015bd3497b9_613293f5dced28177e519308_Property_1_Postgres.svg'
    },
    {
        type: 'application',
        name: 'MySQL Database',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3af35ce0aef06f62b13_613293f3f92f1aa4d938fa35_Property_1_mysql.svg'
    },
    {
        type: 'database',
        name: 'Oracle',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/627056650238264bab07986e_oracle_database_logo-p-500.png'
    },
    {
        type: 'database',
        name: 'SQL Server',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3b006154ec5dc3ad22a_613293ee919da28b221d209d_Property_1_sql_server.svg'
    },
    {
        type: 'application',
        name: 'Salesforce',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3b1aac6b004333497bd_613293ea19b75f3fbc99ef86_Salesforce.svg'
    },
    {
        type: 'application',
        name: 'Google Ads',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3b0d6736d04e2c7a272_613293ec207945ebed3b8ca7_Property_1_GoogleAds.svg'
    },
    {
        type: 'application',
        name: 'NetSuite SuiteAnalytics',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3b11a9912c7c4c63be1_613293e85e476629514bfdef_NetSuite.svg'
    },
    {
        type: 'application',
        name: 'Hubspot',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3b27528a1f8efb3d519_613293e68413b6828fa52bea_Hubspot.svg'
    },
    {
        type: 'application',
        name: 'Google Display & Video 360',
        tag: 'new',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3b3ae6b84e468529fc1_613293e1003f87d00623226d_connector_dv360.png'
    },
    {
        type: 'application',
        name: 'Outreach',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3524627805a42d00c51_61908ce13a00d2727e2e12e8_Copy_of_Untitled__2_.png'
    },
    {
        type: 'file',
        name: 'Amazon Cloudfront',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a389767c35cadf992ed4_6132947d9b14d05b532d924e_Amazon_CloudFront.svg'
    },
    {
        type: 'application',
        name: 'AWS Lambda',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3813dee3bc0f46d1ae7_61329496a229ba5ecd1cc913_AWS_Lambda.svg'
    },
    {
        type: 'application',
        name: 'Salesforce Commerce Cloud',
        tag: 'soon',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a350e44b94e6f2e3060c_61908cea9cea7a937e42eb02_Salesforce_Commerce_Cloud_logo.png'
    },
    {
        type: 'database',
        name: 'Amazon DynamoDB',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a37842545a3efbca7a90_613294b4b75f64f420290520_connector_amazon-dynamodb-symbol.svg'
    },
    {
        type: 'application',
        name: 'Magento via MySQL Amazon RDS',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35e4627806c70d00db4_61329516deb0e579d3c2ef03_connector_magento-mysql-amazon-rds-symbol.svg'
    },
    {
        type: 'application',
        name: 'AWS Kinesis',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a372ea8005d62c5e0153_613294cbd6966ee166b06f2f_Amazon_Kinesis_Firehose.svg'
    },
    {
        type: 'file',
        name: 'Amazon S3',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3acdc1f697ac8b290e4_613293fc6f48627332b4d947_Amazon_S3.svg'
    },
    {
        type: 'database',
        name: 'MariaDB on Amazon RDS',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a35dd14f9ba9c3fef8e8_6132951d8413b632c8a69c59_connector_mariadb-amazon-rds-symbol.svg'
    },
    {
        type: 'database',
        name: 'Oracle on Amazon RDS',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/627056650238264bab07986e_oracle_database_logo-p-500.png'
    },
    {
        type: 'application',
        name: 'Amazon Aurora MySQL',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a383d9a4de5e47e35628_613294925e476606994cadb9_image.png'
    },
    {
        type: 'database',
        name: 'Amazon Aurora PostgreSQL',
        tag: '',
        image: 'https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a37c4627803620d00fdd_613294a5fdbea6161556f5eb_connector_amazon-aurora-postgresql-symbol.svg'
    },
   
]