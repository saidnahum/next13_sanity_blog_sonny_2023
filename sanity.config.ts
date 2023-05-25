/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { myTheme } from './themes'
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/Logo'
import { getDefaultDocumentNode } from './structure'

export default defineConfig({
  basePath: '/studio',
  name: 'SAID_Content_Studio',
  title: 'SAID Content Studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode
    }),
    visionTool({defaultApiVersion: apiVersion}),
  ],
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
