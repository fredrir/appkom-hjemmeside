import Image from "next/image";
import { blogs } from "@/lib/blog";
import { BlogCard } from "@/components/home/BlogCard";
import { Button } from "@/components/Button";
import { MemberCard } from "@/components/home/MemberCard";
import { ProjectCard } from "@/components/home/ProjectCard";
import { projects } from "@/lib/projects";
import { HeaderText } from "@/components/headerText";
import {
  getLastMemberPeriod,
  getMembersForPeriod,
} from "@/lib/utils/getRelevantMembers";

export default function Home() {
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="py-6 px-6 w-full max-w-screen-xl text-white">
        <main className="flex flex-col">
          <div className="py-6">
            <div className="flex flex-col sm:flex-row items-start justify-between">
              <div>
                <HeaderText title="Applikasjonskomiteen" />
                <article className="mt-6">
                  Applikasjonskomiteen (Appkom) er en komité under Online,
                  linjeforeningen for informatikk ved NTNU. Appkoms mål er å
                  utvikle programvare som er nyttig og underholdende for
                  informatikkstudenter.
                </article>
              </div>
              <Image
                src={"/logos/appkom-logo.svg"}
                alt={"Appkom logo"}
                width={150}
                height={150}
                className="ml-4 sm:ml-4 mt-4 sm:mt-0"
              />
            </div>
          </div>

          <div className="w-full py-8 border-2 rounded-lg border-gray-700">
            <article className="p-4">
              Applikasjonskomiteen jobber med å utvikle ulike digitale tjenester
              for Online, som apper, nettsider og infoskjermer. Er du
              interessert å bli med på våre spennende prosjekter, eller har du
              lyst til å starte opp ditt eget prosjekt er appkom stedet for deg.
              Vi har blant annet tidligere laget Online appen, infoskjermen på
              A4 og diverse andre spill. For tiden jobber vi med å fullføre våre
              diverse andre prosjekter samt vedlikeholde og forberede våre
              lanserte prosjekter. Vi er alltid på utkikk å starte opp noe nytt
              og spennende, og setter veldig godt pris på nye ideer. <br />{" "}
              <br />
              Vi er en sosial gjeng som liker å utvikle tjenester som vi syntes
              vil være både nyttig, men også underholderne for Online, og for
              studenter generelt. Vi krever ingen forehåndskunnskaper, og har du
              noen spørsmål underveis er det bare å spørre din progge fadder,
              som vil være din mentor i oppstarten.
            </article>
          </div>
          <div className="py-8">
            <HeaderText title="Blogg" />
            <div className="py-8 flex flex-col md:flex-row justify-between gap-5">
              {blogs
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                .slice(0, 3)
                .map((blog) => (
                  <BlogCard blog={blog} key={blog.createdAt.toISOString()} />
                ))}
            </div>

            <div className="flex justify-center items-center mt-2">
              <Button title="Les mer" href="/blogg" color={"onlineOrange"} />
            </div>
          </div>
          <div className="pb-8">
            <div className="pb-8">
              <HeaderText title="Våre Prosjekter" id="prosjekter" />
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.slice(0, 4).map((project) => (
                  <ProjectCard project={project} key={project.title} />
                ))}
              </div>
              <div className="justify-between items-center text-center pt-8">
                <Button
                  title={"Se alle prosjekter"}
                  href="/prosjekt"
                  color={"onlineOrange"}
                />
              </div>
            </div>
          </div>
          <div className="py-8">
            <div className="pb-8">
              <HeaderText title="Medlemmer" />
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 w-full gap-4">
                {getMembersForPeriod(getLastMemberPeriod).map((member) => {
                  const rolesByPeriod = member.rolesByPeriod;
                  const lastPeriod = Object.keys(rolesByPeriod)
                    .sort()
                    .reverse()[0];

                  return (
                    <MemberCard
                      member={member}
                      key={member.name}
                      period={lastPeriod}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                title="Se tidligere medlemmer"
                href="/medlem"
                color={"onlineOrange"}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
