import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | Subreddit Finder",
  description: "Privacy policy for Subreddit Finder. Learn how we handle your data and protect your privacy.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">Last updated: April 11, 2023</p>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Introduction</h2>
                <p>
                  Welcome to Subreddit Finder's Privacy Policy. This Privacy Policy describes how we collect, use, and
                  disclose your information when you use our service.
                </p>
                <p>
                  We use your data to provide and improve the Service. By using the Service, you agree to the collection
                  and use of information in accordance with this policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Information Collection and Use</h2>
                <p>
                  We collect several different types of information for various purposes to provide and improve our
                  Service to you.
                </p>
                <h3 className="text-xl font-semibold mt-4">Types of Data Collected</h3>
                <h4 className="text-lg font-medium mt-3">Usage Data</h4>
                <p>
                  We may collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may
                  include information such as your computer's Internet Protocol address (e.g., IP address), browser
                  type, browser version, the pages of our Service that you visit, the time and date of your visit, the
                  time spent on those pages, unique device identifiers, and other diagnostic data.
                </p>
                <h4 className="text-lg font-medium mt-3">Cookies</h4>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our Service and hold certain
                  information. Cookies are files with a small amount of data which may include an anonymous unique
                  identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  However, if you do not accept cookies, you may not be able to use some portions of our Service.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Use of Data</h2>
                <p>Subreddit Finder uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Transfer of Data</h2>
                <p>
                  Your information, including Personal Data, may be transferred to — and maintained on — computers
                  located outside of your state, province, country, or other governmental jurisdiction where the data
                  protection laws may differ from those of your jurisdiction.
                </p>
                <p>
                  Your consent to this Privacy Policy followed by your submission of such information represents your
                  agreement to that transfer.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Security of Data</h2>
                <p>
                  The security of your data is important to us but remember that no method of transmission over the
                  Internet or method of electronic storage is 100% secure. While we strive to use commercially
                  acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                  Policy are effective when they are posted on this page.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <p>
                  By email:{" "}
                  <a href="mailto:usmanibrahimmauser@gmail.com" className="text-primary hover:underline">
                    usmanibrahimmauser@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
