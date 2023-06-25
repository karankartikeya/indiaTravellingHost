import React from 'react'
import Footer from '../components/Footer'
import { GetServerSideProps } from 'next'
import { fetchBlog } from '@/utils/fetchBlogs'
import { Post, Social } from '@/typing'
import { fetchItinerary } from '@/utils/fetchItineraries'
import { fetchSocials } from '@/utils/fetchSocials'


type Props = {
    socials: Social[];
}

function privacy({ socials }: Props) {
    return (
        <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51]'>
            <div className='flex-col p-10 space-y-10' id='privacy'>
                <h1 className='text-red-600 text-5xl font-extrabold'>Privacy Policy</h1>
                <div className='space-y-2'>
                    <p className='text-black text-xl font-semibold'>
                        At India Travelling Host website, we value the privacy of our viewers and readers. This Privacy Policy outlines the types of personal information we collect and how we use, store, and protect it. By accessing or using our website, you consent to the practices described in this policy.
                    </p>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-red-400 text-3xl font-extrabold'>Information Collected:</h1>
                    <p className='text-black text-xl'>
                        We collect the following information from our users:
                    </p>
                    <div className='ml-4'>
                        <li>
                            Non-Personal Information: When you visit our website, we automatically collect certain non-personal information such as your IP address, browser type, device information, and referring website.
                        </li>
                        <li>
                            Personal Information: We may collect personal information, such as your name and email address, when you voluntarily provide it to us through forms, comments, or subscriptions.
                        </li>
                        <li>
                            Use of Information:
                            a. Non-Personal Information: We use non-personal information to analyze trends, administer the website, track user movements, and gather demographic information.
                        </li>
                        <li>
                            b. Personal Information: We may use personal information to communicate with you, provide requested services, respond to inquiries, send newsletters, and improve our website&apos;s content and functionality.
                        </li>
                    </div>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-red-400 text-3xl font-extrabold'>Cookies and Tracking Technologies</h1>
                    <p className='text-black text-xl'>
                        We use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our website. You can manage your cookie preferences through your browser settings.
                    </p>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-red-400 text-3xl font-extrabold'>Third Party Websites</h1>
                    <p className='text-black text-xl'>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-red-400 text-3xl font-extrabold'>Data Security</h1>
                    <p className='text-black text-xl'>
                        We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the Internet or electronic storage is completely secure.
                    </p>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-red-400 text-3xl font-extrabold'>Data Retention</h1>
                    <p className='text-black text-xl'>
                        We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-red-400 text-3xl font-extrabold'>Data Security</h1>
                    <p className='text-black text-xl'>
                        We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the Internet or electronic storage is completely secure.
                    </p>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-red-400 text-3xl font-extrabold'>Children&apos;s Privacy</h1>
                    <p className='text-black text-xl'>
                        We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the Internet or electronic storage is completely secure.
                    </p>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-red-400 text-3xl font-extrabold'>Changes to Privacy Policy</h1>
                    <p className='text-black text-xl'>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the revised policy on our website. Your continued use of the website after such modifications will constitute your acknowledgment of the modified policy.
                    </p>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-red-400 text-3xl font-extrabold'>Contact Us</h1>
                    <p className='text-black text-xl '>
                        If you have any questions or concerns about this Privacy Policy, please contact us using the information provided on our website
                    </p>
                </div>

            </div>

            {/* <div className='flex flex-col p-10 space-y-22' id='refund'>
                <h1 className='text-red-600 text-5xl font-extrabold'>Refund Policy</h1>
                <div className='space-y-2'>
                    <p className='text-black text-xl font-semibold mt-10'>
                        Thank you for choosing our online music learning platform 7svar.tech.
                    </p>
                    <p className='text-black text-xl'>
                        Please note that we have a strict no refund policy for all users who have completed the first
                        introductory class. Regardless, if a complaint is made within 24 hours of the first class, we will
                        assign another tutor or provide a full refund if the student does not wish to continue using the
                        service. However, refunds after 24 hours of first class are not possible. Once you have completed
                        the introductory class and accessed our content, you will not be eligible for a refund under any
                        circumstances. By accessing our content, you agree to these terms and conditions.
                    </p>
                    <p className='text-black text-xl'>
                        Fee refund would not include taxes paid on services provided by regulatory bodies.

                    </p>
                    <p className='text-black text-xl'>
                        Our tutors deliver our services via our website platform, which involves scheduling their time,
                        skills, and knowledge. As a result of incurring costs in providing these services, refunds are not
                        possible under any circumstances.
                    </p>
                </div>


            </div> */}


            <div className='flex flex-col p-10 space-y-22' id='terms'>
                <h1 className='text-red-600 text-5xl font-extrabold'>Terms & Conditions</h1>
                <div className='space-y-10'>
                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold mt-10'>Introduction</h1>
                        <p className='text-black text-xl'>
                            Welcome to our website! These terms and conditions
                            govern your use of our website as a viewer, and by accessing or using our
                            website, you agree to be bound by these terms and conditions. Please read them carefully.
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold'>Intellectual Property Rights</h1>
                        <p className='text-black text-xl'>
                            All content provided on our website, including but not limited to text, images, videos, and graphics, is owned by us or our content providers and is protected by intellectual property laws. You agree not to copy, reproduce, distribute, or create derivative works from our content without our prior written consent.
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold'>User Conduct</h1>
                        <div className='ml-4'>
                            <li>
                                You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict or inhibit their use and enjoyment of the website.
                            </li>
                            <li>
                                You agree not to engage in any activity that may disrupt or interfere with the proper functioning of our website, including the introduction of viruses, malware, or any other harmful code.
                            </li>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold'>User Generated Content</h1>
                        <div className='ml-4'>
                            <li>
                                You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict or inhibit their use and enjoyment of the website.Our website may allow you to submit user-generated content, such as comments or reviews. By submitting such content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, adapt, publish, translate, distribute, and display the content in any media.
                            </li>
                            <li>
                                You agree not to engage in any activity that may disrupt or interfere with the proper functioning of our website, including the introduction of viruses, malware, or any other harmful code.You are solely responsible for the content you submit and must ensure it does not infringe upon the rights of any third party or violate any applicable laws. We reserve the right to remove any content that we deem inappropriate or in violation of these terms and conditions.
                            </li>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold'>Privacy</h1>
                        <div className='ml-4'>
                            <li>
                                We respect your privacy and handle your personal information in accordance with our Privacy Policy. By using our website, you consent to the collection, use, and disclosure of your personal information as described in the Privacy Policy.
                            </li>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold'>Third Party Links</h1>
                        <div className='ml-4'>
                            <li>
                                Our website may contain links to third-party websites or resources that are not owned or controlled by us. We are not responsible for the content or availability of these external sites and do not endorse or assume any responsibility for them. Your use of third-party websites is at your own risk.
                            </li>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold'>User Conduct</h1>
                        <div className='ml-4'>
                            <li>
                                You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict or inhibit their use and enjoyment of the website.
                            </li>
                            <li>
                                You agree not to engage in any activity that may disrupt or interfere with the proper functioning of our website, including the introduction of viruses, malware, or any other harmful code.
                            </li>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold'>Disclaimer of Warranties</h1>
                        <div className='ml-4'>
                            <li>
                                We make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or completeness of the content on our website. Your use of the website is at your own risk.
                            </li>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold'>Limitation of Liability</h1>
                        <div className='ml-4'>
                            <li>
                                To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, data, or other intangible losses, resulting from your use or inability to use our website.
                            </li>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold'>Modifications to Terms and Conditions</h1>
                        <div className='ml-4'>
                            <li>
                                We reserve the right to modify or replace these terms and conditions at any time, without prior notice. The updated terms and conditions will be posted on our website, and your continued use of the website after such changes constitutes your acceptance of the modified terms and conditions.
                            </li>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-red-400 text-3xl font-extrabold'>Contact Us</h1>
                        <p className='text-black text-xl'>
                            If you have any questions or concerns regarding these
                            terms and conditions, please contact us at [indiatravellinghost@gmail.com].

                        </p>
                    </div>
                </div>
            </div>

            <Footer socials={socials} />
        </div>
    )
}

export default privacy


export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            socials
        }
    }
}