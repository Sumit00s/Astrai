import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Atom, AudioLines, Cpu, Ghost, Globe, Mic, Paperclip, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AIModelsOPtion } from "@/services/Shared"


export default function ChatInputBox(){
    return(
        <div className="flex flex-col h-screen items-center justify-center w-full">
            <h1 className=" text-center py-3 text-3xl font-prata tracking-widest">Astrai</h1>
            <div className="p-2 w-full max-w-2xl border rounded-2xl">
                <div className="flex justify-between items-end">
                    <Tabs defaultValue="Search" className="w-[400px]">

                        <TabsContent value="Search">
                            <input type="text" placeholder="Ask Anything" className="w-full p-4 outline-none"/>
                        </TabsContent>
                        <TabsContent value="Research">
                            <input type="text" placeholder="Research Anything" className="w-full p-4 outline-none"/>
                        </TabsContent>

                        <TabsList>
                            <TabsTrigger value="Search" className="text-primary"><Search/> Search</TabsTrigger>
                            <TabsTrigger value="Research" className="text-primary"><Atom/> Research</TabsTrigger>
                        </TabsList>

                    </Tabs>

                    <div className="flex gap-2 items-center">
                        
                            <DropdownMenu>
                            <DropdownMenuTrigger><Button variant='ghost'><Cpu className="text-gray-500 h-5 w-5"/></Button></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {
                                    AIModelsOPtion.map((item)=>(
                                        <div>
                                            <DropdownMenuItem>
                                            <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                        </div>
                                    ))
                                }
                            </DropdownMenuContent>
                            </DropdownMenu>
                        


                        <Button variant='ghost'><Globe className="text-gray-500 h-5 w-5"/></Button>
                        <Button variant='ghost'><Paperclip className="text-gray-500 h-5 w-5"/></Button>
                        <Button variant='ghost'><Mic className="text-gray-500 h-5 w-5"/></Button>
                        <Button className="bg-primary"><AudioLines className="text-white h-5 w-5"/></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}